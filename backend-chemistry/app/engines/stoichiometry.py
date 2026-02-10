from app.engines.balancer import balance_equation, get_molecular_weight
from app.models.requests import QuantityInput


def convert_to_moles(quantity: QuantityInput) -> float:
    """Convert a quantity input to moles."""
    mw = get_molecular_weight(quantity.formula)

    if quantity.unit == "mol":
        return quantity.value
    elif quantity.unit == "g":
        return quantity.value / mw
    elif quantity.unit == "L":
        if quantity.concentration is None:
            raise ValueError(f"Concentration (M) required when using liters for {quantity.formula}")
        return quantity.value * quantity.concentration
    elif quantity.unit == "mL":
        if quantity.concentration is None:
            raise ValueError(f"Concentration (M) required when using mL for {quantity.formula}")
        return (quantity.value / 1000.0) * quantity.concentration
    elif quantity.unit == "M":
        raise ValueError("Molarity (M) requires a volume. Use 'L' or 'mL' with concentration instead.")
    else:
        raise ValueError(f"Unknown unit: {quantity.unit}")


def calculate_stoichiometry(equation: str, quantities: list[QuantityInput], target_product: str | None = None) -> dict:
    """Perform full stoichiometric calculation."""
    balanced = balance_equation(equation)
    coefficients = balanced["coefficients"]
    reactants = balanced["reactants"]
    products = balanced["products"]
    steps = []

    # Convert inputs to moles
    input_moles = {}
    for q in quantities:
        moles = convert_to_moles(q)
        input_moles[q.formula] = moles
        mw = get_molecular_weight(q.formula)
        steps.append(
            f"Convert {q.value} {q.unit} {q.formula} to moles: "
            f"{q.value} {q.unit} ÷ {mw:.2f} g/mol = {moles:.4f} mol"
            if q.unit == "g" else
            f"Input: {q.value} {q.unit} {q.formula} = {moles:.4f} mol"
        )

    # Find limiting reagent
    mole_ratios = {}
    for formula in reactants:
        if formula in input_moles:
            coeff = coefficients.get(formula, 1)
            mole_ratios[formula] = input_moles[formula] / coeff

    if not mole_ratios:
        raise ValueError("No input quantities match any reactants in the equation")

    limiting_reagent = min(mole_ratios, key=mole_ratios.get)
    limiting_ratio = mole_ratios[limiting_reagent]
    steps.append(
        f"Limiting reagent: {limiting_reagent} "
        f"(mole ratio: {mole_ratios[limiting_reagent]:.4f})"
    )

    # Calculate yields
    results = []
    for formula in reactants + products:
        coeff = coefficients.get(formula, 1)
        moles = limiting_ratio * coeff
        mw = get_molecular_weight(formula)
        grams = moles * mw

        is_limiting = formula == limiting_reagent
        results.append({
            "formula": formula,
            "name": None,
            "moles": round(moles, 6),
            "grams": round(grams, 6),
            "is_limiting": is_limiting,
        })

        if formula in products:
            steps.append(
                f"Theoretical yield of {formula}: "
                f"{coeff} × {limiting_ratio:.4f} mol = {moles:.4f} mol = {grams:.4f} g"
            )

    return {
        "balanced_equation": balanced["balanced_equation"],
        "coefficients": coefficients,
        "limiting_reagent": limiting_reagent,
        "results": results,
        "steps": steps,
    }
