from chempy import balance_stoichiometry, Substance


def parse_equation(equation: str) -> tuple[list[str], list[str]]:
    """Parse equation string into reactants and products lists."""
    equation = equation.strip()
    for sep in ["->", "→", "=", "⟶"]:
        if sep in equation:
            left, right = equation.split(sep, 1)
            break
    else:
        raise ValueError("Equation must contain '->', '=', or '→' to separate reactants and products")

    reactants = [s.strip() for s in left.split("+") if s.strip()]
    products = [s.strip() for s in right.split("+") if s.strip()]

    if not reactants or not products:
        raise ValueError("Equation must have at least one reactant and one product")

    # Strip leading coefficients (digits) if present
    def strip_coeff(formula: str) -> str:
        i = 0
        while i < len(formula) and (formula[i].isdigit() or formula[i] == ' '):
            i += 1
        return formula[i:].strip() if i < len(formula) else formula.strip()

    reactants = [strip_coeff(r) for r in reactants]
    products = [strip_coeff(p) for p in products]

    return reactants, products


def balance_equation(equation: str) -> dict:
    """Balance a chemical equation and return coefficients."""
    reactants, products = parse_equation(equation)

    try:
        reac_set = set(reactants)
        prod_set = set(products)
        balanced = balance_stoichiometry(reac_set, prod_set)
        reac_coeffs, prod_coeffs = balanced

        coefficients = {}
        coefficients.update({k: int(v) for k, v in reac_coeffs.items()})
        coefficients.update({k: int(v) for k, v in prod_coeffs.items()})

        # Build balanced equation string
        reac_parts = []
        for r in reactants:
            c = coefficients.get(r, 1)
            reac_parts.append(f"{c}{r}" if c > 1 else r)

        prod_parts = []
        for p in products:
            c = coefficients.get(p, 1)
            prod_parts.append(f"{c}{p}" if c > 1 else p)

        balanced_str = " + ".join(reac_parts) + " → " + " + ".join(prod_parts)

        return {
            "balanced_equation": balanced_str,
            "coefficients": coefficients,
            "reactants": reactants,
            "products": products,
        }
    except Exception as e:
        raise ValueError(f"Could not balance equation: {str(e)}")


def get_molecular_weight(formula: str) -> float:
    """Get molecular weight of a compound."""
    try:
        s = Substance.from_formula(formula)
        return s.mass
    except Exception:
        try:
            from chemicals import molecular_weight, CAS_from_any, search_chemical
            chem = search_chemical(formula)
            return chem.MW
        except Exception:
            raise ValueError(f"Could not determine molecular weight for {formula}")
