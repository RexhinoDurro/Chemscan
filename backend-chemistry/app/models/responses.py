from pydantic import BaseModel
from typing import Optional


class BalanceResponse(BaseModel):
    balanced_equation: str
    coefficients: dict[str, int]
    reactants: list[str]
    products: list[str]


class YieldResult(BaseModel):
    formula: str
    name: Optional[str] = None
    moles: float
    grams: float
    is_limiting: bool = False


class CalculationResponse(BaseModel):
    balanced_equation: str
    coefficients: dict[str, int]
    limiting_reagent: str
    results: list[YieldResult]
    steps: list[str]


class HazardInfo(BaseModel):
    formula: str
    name: str
    ghs_categories: list[str]
    hazard_statements: list[str]
    precautions: list[str]
    severity: str  # "red", "amber", "green"
    ppe_required: list[str]


class CombinationWarning(BaseModel):
    compounds: list[str]
    warning: str
    severity: str


class SafetyResponse(BaseModel):
    hazards: list[HazardInfo]
    combination_warnings: list[CombinationWarning]
    overall_severity: str
    recommended_ppe: list[str]


class CompoundResponse(BaseModel):
    formula: str
    name: str
    molecular_weight: float
    hazards: Optional[HazardInfo] = None
