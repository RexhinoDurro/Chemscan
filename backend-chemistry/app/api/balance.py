from fastapi import APIRouter, HTTPException
from app.models.requests import BalanceRequest
from app.models.responses import BalanceResponse
from app.engines.balancer import balance_equation
from app.utils.cache import cache_key, cache_get, cache_set
from app.utils.validators import validate_equation

router = APIRouter()


@router.post("/balance", response_model=BalanceResponse)
async def balance(request: BalanceRequest):
    if not validate_equation(request.equation):
        raise HTTPException(status_code=400, detail="Invalid equation format. Use 'reactants -> products'")

    key = cache_key("balance", request.equation)
    cached = cache_get(key)
    if cached:
        return cached

    try:
        result = balance_equation(request.equation)
        cache_set(key, result)
        return result
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Balancing failed: {str(e)}")
