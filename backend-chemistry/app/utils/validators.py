import re


def validate_equation(equation: str) -> bool:
    """Validate that a string looks like a chemical equation."""
    if not equation or not equation.strip():
        return False

    has_separator = any(sep in equation for sep in ["->", "→", "=", "⟶"])
    if not has_separator:
        return False

    # Must have at least one letter (element symbol) on each side
    for sep in ["->", "→", "=", "⟶"]:
        if sep in equation:
            left, right = equation.split(sep, 1)
            if not re.search(r'[A-Z]', left) or not re.search(r'[A-Z]', right):
                return False
            break

    return True


def validate_formula(formula: str) -> bool:
    """Validate that a string looks like a chemical formula."""
    if not formula or not formula.strip():
        return False
    # Must start with uppercase letter, can contain letters, digits, parentheses
    return bool(re.match(r'^[A-Z][a-zA-Z0-9()\[\]]*$', formula.strip()))
