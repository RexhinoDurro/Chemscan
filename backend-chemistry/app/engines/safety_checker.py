import json
import os
from pathlib import Path

DATA_DIR = Path(__file__).parent.parent / "data"

_safety_rules = None
_equipment_data = None


def _load_safety_rules() -> dict:
    global _safety_rules
    if _safety_rules is None:
        with open(DATA_DIR / "safety_rules.json", "r") as f:
            _safety_rules = json.load(f)
    return _safety_rules


def _load_equipment_data() -> dict:
    global _equipment_data
    if _equipment_data is None:
        with open(DATA_DIR / "equipment.json", "r") as f:
            _equipment_data = json.load(f)
    return _equipment_data


def check_compound(formula: str) -> dict | None:
    """Look up safety data for a single compound."""
    rules = _load_safety_rules()
    compounds = rules.get("compounds", {})

    entry = compounds.get(formula)
    if entry is None:
        # Try common name lookup
        for key, val in compounds.items():
            if val.get("name", "").lower() == formula.lower():
                entry = val
                entry["formula"] = key
                break

    if entry is None:
        return None

    return {
        "formula": entry.get("formula", formula),
        "name": entry.get("name", formula),
        "ghs_categories": entry.get("ghs_categories", []),
        "hazard_statements": entry.get("hazard_statements", []),
        "precautions": entry.get("precautions", []),
        "severity": entry.get("severity", "green"),
        "ppe_required": entry.get("ppe_required", []),
    }


def check_combinations(compounds: list[str]) -> list[dict]:
    """Check for dangerous compound combinations."""
    rules = _load_safety_rules()
    combinations = rules.get("dangerous_combinations", [])
    warnings = []

    compound_set = set(c.upper() for c in compounds)

    for combo in combinations:
        combo_compounds = set(c.upper() for c in combo.get("compounds", []))
        if combo_compounds.issubset(compound_set):
            warnings.append({
                "compounds": combo["compounds"],
                "warning": combo["warning"],
                "severity": combo.get("severity", "red"),
            })

    return warnings


def check_safety(compounds: list[str]) -> dict:
    """Full safety check for a list of compounds."""
    hazards = []
    all_ppe = set()
    max_severity = "green"
    severity_order = {"green": 0, "amber": 1, "red": 2}

    for formula in compounds:
        info = check_compound(formula)
        if info:
            hazards.append(info)
            all_ppe.update(info.get("ppe_required", []))
            if severity_order.get(info["severity"], 0) > severity_order.get(max_severity, 0):
                max_severity = info["severity"]
        else:
            hazards.append({
                "formula": formula,
                "name": formula,
                "ghs_categories": [],
                "hazard_statements": ["No safety data available"],
                "precautions": ["Handle with standard laboratory precautions"],
                "severity": "green",
                "ppe_required": ["safety_goggles", "lab_coat"],
            })

    combination_warnings = check_combinations(compounds)
    if combination_warnings:
        max_severity = "red"

    if not all_ppe:
        all_ppe = {"safety_goggles", "lab_coat"}

    return {
        "hazards": hazards,
        "combination_warnings": combination_warnings,
        "overall_severity": max_severity,
        "recommended_ppe": sorted(list(all_ppe)),
    }


def get_equipment(reaction_type: str = "general") -> list[str]:
    """Get recommended equipment for a reaction type."""
    data = _load_equipment_data()
    return data.get(reaction_type, data.get("general", []))
