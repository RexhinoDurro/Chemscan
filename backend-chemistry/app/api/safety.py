from fastapi import APIRouter, HTTPException
from app.models.requests import SafetyCheckRequest
from app.models.responses import SafetyResponse, CompoundResponse
from app.engines.safety_checker import check_safety, check_compound
from app.engines.balancer import get_molecular_weight
from app.utils.cache import cache_key, cache_get, cache_set

router = APIRouter()


@router.post("/safety-check", response_model=SafetyResponse)
async def safety_check(request: SafetyCheckRequest):
    key = cache_key("safety", sorted(request.compounds))
    cached = cache_get(key)
    if cached:
        return cached

    try:
        result = check_safety(request.compounds)
        cache_set(key, result)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Safety check failed: {str(e)}")


@router.get("/compound/{formula}", response_model=CompoundResponse)
async def get_compound(formula: str):
    key = cache_key("compound", formula)
    cached = cache_get(key)
    if cached:
        return cached

    try:
        mw = get_molecular_weight(formula)
        hazard = check_compound(formula)

        result = {
            "formula": formula,
            "name": hazard["name"] if hazard else formula,
            "molecular_weight": round(mw, 4),
            "hazards": hazard,
        }
        cache_set(key, result)
        return result
    except ValueError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Compound lookup failed: {str(e)}")
