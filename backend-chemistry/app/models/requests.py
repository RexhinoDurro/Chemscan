from pydantic import BaseModel, Field
from typing import Optional


class BalanceRequest(BaseModel):
    equation: str = Field(..., description="Chemical equation string, e.g. 'H2 + O2 -> H2O'")


class QuantityInput(BaseModel):
    formula: str = Field(..., description="Chemical formula, e.g. 'H2O'")
    value: float = Field(..., gt=0, description="Numeric value")
    unit: str = Field(..., description="Unit: 'g', 'mol', 'L', 'mL', 'M'")
    concentration: Optional[float] = Field(None, description="Molarity if unit is L/mL")


class CalculateRequest(BaseModel):
    equation: str = Field(..., description="Chemical equation (will be balanced if not already)")
    quantities: list[QuantityInput] = Field(..., min_length=1, description="Input quantities for reactants")
    target_product: Optional[str] = Field(None, description="Specific product to calculate yield for")


class SafetyCheckRequest(BaseModel):
    compounds: list[str] = Field(..., min_length=1, description="List of chemical formulas to check")
