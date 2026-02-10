from fastapi import APIRouter, HTTPException
from app.models.requests import CalculateRequest
from app.models.responses import CalculationResponse
from app.engines.stoichiometry import calculate_stoichiometry
from app.utils.cache import cache_key, cache_get, cache_set
from app.utils.validators import validate_equation

router = APIRouter()


@router.post("/calculate", response_model=CalculationResponse)
async def calculate(request: CalculateRequest):
    if not validate_equation(request.equation):
        raise HTTPException(status_code=400, detail="Invalid equation format. Use 'reactants -> products'")

    key = cache_key("calc", request.equation, [q.model_dump() for q in request.quantities])
    cached = cache_get(key)
    if cached:
        return cached

    try:
        result = calculate_stoichiometry(
            request.equation,
            request.quantities,
            request.target_product,
        )
        cache_set(key, result)
        return result
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Calculation failed: {str(e)}")
