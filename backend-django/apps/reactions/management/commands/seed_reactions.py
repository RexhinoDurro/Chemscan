from django.core.management.base import BaseCommand
from apps.reactions.models import ReactionLibrary

REACTIONS = [
    # Acid-Base
    {"name": "HCl + NaOH Neutralization", "equation": "HCl + NaOH -> NaCl + H2O", "category": "acid_base", "difficulty": "easy", "description": "Classic strong acid-strong base neutralization reaction."},
    {"name": "H2SO4 + NaOH Neutralization", "equation": "H2SO4 + 2NaOH -> Na2SO4 + 2H2O", "category": "acid_base", "difficulty": "easy", "description": "Diprotic acid neutralization with sodium hydroxide."},
    {"name": "HNO3 + KOH Neutralization", "equation": "HNO3 + KOH -> KNO3 + H2O", "category": "acid_base", "difficulty": "easy", "description": "Nitric acid and potassium hydroxide neutralization."},
    {"name": "CH3COOH + NaOH", "equation": "CH3COOH + NaOH -> CH3COONa + H2O", "category": "acid_base", "difficulty": "medium", "description": "Weak acid (acetic acid) neutralization with strong base."},
    {"name": "H3PO4 + NaOH", "equation": "H3PO4 + 3NaOH -> Na3PO4 + 3H2O", "category": "acid_base", "difficulty": "medium", "description": "Triprotic phosphoric acid complete neutralization."},
    {"name": "HCl + NH3", "equation": "HCl + NH3 -> NH4Cl", "category": "acid_base", "difficulty": "medium", "description": "Acid-base reaction producing ammonium chloride salt."},

    # Combustion
    {"name": "Methane Combustion", "equation": "CH4 + 2O2 -> CO2 + 2H2O", "category": "combustion", "difficulty": "easy", "description": "Complete combustion of methane (natural gas)."},
    {"name": "Propane Combustion", "equation": "C3H8 + 5O2 -> 3CO2 + 4H2O", "category": "combustion", "difficulty": "easy", "description": "Complete combustion of propane."},
    {"name": "Ethanol Combustion", "equation": "C2H5OH + 3O2 -> 2CO2 + 3H2O", "category": "combustion", "difficulty": "medium", "description": "Complete combustion of ethanol."},
    {"name": "Glucose Combustion", "equation": "C6H12O6 + 6O2 -> 6CO2 + 6H2O", "category": "combustion", "difficulty": "medium", "description": "Combustion of glucose, similar to cellular respiration."},
    {"name": "Magnesium Combustion", "equation": "2Mg + O2 -> 2MgO", "category": "combustion", "difficulty": "easy", "description": "Bright white flame from burning magnesium ribbon."},
    {"name": "Iron Combustion", "equation": "4Fe + 3O2 -> 2Fe2O3", "category": "combustion", "difficulty": "medium", "description": "Iron rusting/combustion forming iron(III) oxide."},

    # Synthesis
    {"name": "Water Synthesis", "equation": "2H2 + O2 -> 2H2O", "category": "synthesis", "difficulty": "easy", "description": "Formation of water from hydrogen and oxygen."},
    {"name": "Ammonia Synthesis", "equation": "N2 + 3H2 -> 2NH3", "category": "synthesis", "difficulty": "medium", "description": "Haber process for ammonia production."},
    {"name": "Sodium Chloride Synthesis", "equation": "2Na + Cl2 -> 2NaCl", "category": "synthesis", "difficulty": "easy", "description": "Direct combination of sodium and chlorine."},
    {"name": "Iron Sulfide Synthesis", "equation": "Fe + S -> FeS", "category": "synthesis", "difficulty": "easy", "description": "Iron and sulfur combination reaction."},
    {"name": "Aluminum Oxide Synthesis", "equation": "4Al + 3O2 -> 2Al2O3", "category": "synthesis", "difficulty": "medium", "description": "Aluminum combustion forming aluminum oxide."},
    {"name": "Sulfur Trioxide Synthesis", "equation": "2SO2 + O2 -> 2SO3", "category": "synthesis", "difficulty": "hard", "description": "Contact process step for sulfuric acid production."},

    # Decomposition
    {"name": "Water Electrolysis", "equation": "2H2O -> 2H2 + O2", "category": "decomposition", "difficulty": "easy", "description": "Electrolysis of water into hydrogen and oxygen."},
    {"name": "Hydrogen Peroxide Decomposition", "equation": "2H2O2 -> 2H2O + O2", "category": "decomposition", "difficulty": "easy", "description": "Decomposition of hydrogen peroxide, catalyzed by MnO2."},
    {"name": "Calcium Carbonate Decomposition", "equation": "CaCO3 -> CaO + CO2", "category": "decomposition", "difficulty": "easy", "description": "Thermal decomposition of limestone."},
    {"name": "Potassium Chlorate Decomposition", "equation": "2KClO3 -> 2KCl + 3O2", "category": "decomposition", "difficulty": "medium", "description": "Heated potassium chlorate produces oxygen gas."},
    {"name": "Sodium Bicarbonate Decomposition", "equation": "2NaHCO3 -> Na2CO3 + H2O + CO2", "category": "decomposition", "difficulty": "medium", "description": "Baking soda decomposition when heated."},

    # Single Replacement
    {"name": "Zinc + HCl", "equation": "Zn + 2HCl -> ZnCl2 + H2", "category": "single_replacement", "difficulty": "easy", "description": "Zinc dissolves in hydrochloric acid producing hydrogen gas."},
    {"name": "Iron + CuSO4", "equation": "Fe + CuSO4 -> FeSO4 + Cu", "category": "single_replacement", "difficulty": "easy", "description": "Iron displaces copper from copper sulfate solution."},
    {"name": "Mg + HCl", "equation": "Mg + 2HCl -> MgCl2 + H2", "category": "single_replacement", "difficulty": "easy", "description": "Magnesium reacts with hydrochloric acid."},
    {"name": "Al + Fe2O3 (Thermite)", "equation": "2Al + Fe2O3 -> Al2O3 + 2Fe", "category": "single_replacement", "difficulty": "hard", "description": "Thermite reaction - extremely exothermic."},
    {"name": "Cu + AgNO3", "equation": "Cu + 2AgNO3 -> Cu(NO3)2 + 2Ag", "category": "single_replacement", "difficulty": "medium", "description": "Copper displaces silver from silver nitrate solution."},

    # Double Replacement / Precipitation
    {"name": "AgNO3 + NaCl Precipitation", "equation": "AgNO3 + NaCl -> AgCl + NaNO3", "category": "precipitation", "difficulty": "easy", "description": "Silver chloride precipitate forms (white solid)."},
    {"name": "BaCl2 + Na2SO4 Precipitation", "equation": "BaCl2 + Na2SO4 -> BaSO4 + 2NaCl", "category": "precipitation", "difficulty": "easy", "description": "Barium sulfate precipitate forms (white solid)."},
    {"name": "Pb(NO3)2 + KI Precipitation", "equation": "Pb(NO3)2 + 2KI -> PbI2 + 2KNO3", "category": "precipitation", "difficulty": "medium", "description": "Lead iodide 'golden rain' precipitate."},
    {"name": "CaCl2 + Na2CO3", "equation": "CaCl2 + Na2CO3 -> CaCO3 + 2NaCl", "category": "precipitation", "difficulty": "easy", "description": "Calcium carbonate precipitate forms."},
    {"name": "FeCl3 + NaOH", "equation": "FeCl3 + 3NaOH -> Fe(OH)3 + 3NaCl", "category": "precipitation", "difficulty": "medium", "description": "Iron(III) hydroxide rust-colored precipitate."},

    # Redox
    {"name": "Zinc-Copper Electrochemical Cell", "equation": "Zn + Cu2+ -> Zn2+ + Cu", "category": "redox", "difficulty": "medium", "description": "Daniell cell - zinc anode, copper cathode."},
    {"name": "KMnO4 + FeSO4 Titration", "equation": "2KMnO4 + 10FeSO4 + 8H2SO4 -> 2MnSO4 + 5Fe2(SO4)3 + K2SO4 + 8H2O", "category": "redox", "difficulty": "hard", "description": "Permanganate-iron(II) redox titration."},
    {"name": "Hydrogen Peroxide + KI", "equation": "H2O2 + 2KI -> I2 + 2KOH", "category": "redox", "difficulty": "medium", "description": "Oxidation of iodide by hydrogen peroxide."},
    {"name": "Photosynthesis", "equation": "6CO2 + 6H2O -> C6H12O6 + 6O2", "category": "redox", "difficulty": "medium", "description": "Photosynthesis - carbon dioxide and water to glucose and oxygen."},
    {"name": "Rusting of Iron", "equation": "4Fe + 3O2 + 6H2O -> 4Fe(OH)3", "category": "redox", "difficulty": "medium", "description": "Iron corrosion in the presence of water and oxygen."},
]


class Command(BaseCommand):
    help = 'Seed the reaction library with common reactions'

    def add_arguments(self, parser):
        parser.add_argument('--skip-existing', action='store_true', help='Skip if reactions already exist')

    def handle(self, *args, **options):
        if options['skip_existing'] and ReactionLibrary.objects.exists():
            self.stdout.write(self.style.SUCCESS('Reactions already seeded, skipping.'))
            return

        created = 0
        for reaction in REACTIONS:
            _, was_created = ReactionLibrary.objects.get_or_create(
                name=reaction['name'],
                defaults=reaction,
            )
            if was_created:
                created += 1

        self.stdout.write(self.style.SUCCESS(f'Seeded {created} reactions (total: {ReactionLibrary.objects.count()})'))
