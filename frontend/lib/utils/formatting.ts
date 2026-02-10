export function formatFormula(formula: string): string {
  // Convert H2O to H₂O style subscripts for display
  return formula.replace(/(\d+)/g, '<sub>$1</sub>');
}

export function formatEquation(equation: string): string {
  const parts = equation.split(/(\+|→|->)/);
  return parts
    .map((part) => {
      const trimmed = part.trim();
      if (trimmed === '+' || trimmed === '→' || trimmed === '->') {
        return ` ${trimmed === '->' ? '→' : trimmed} `;
      }
      // Format coefficient + formula
      const match = trimmed.match(/^(\d*)(.+)$/);
      if (match) {
        const coeff = match[1];
        const formula = formatFormula(match[2]);
        return coeff ? `${coeff}${formula}` : formula;
      }
      return trimmed;
    })
    .join('');
}

export function severityColor(severity: string): string {
  switch (severity) {
    case 'red':
      return 'bg-red-100 text-red-800 border-red-300';
    case 'amber':
      return 'bg-amber-100 text-amber-800 border-amber-300';
    case 'green':
      return 'bg-green-100 text-green-800 border-green-300';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-300';
  }
}

export function severityBadgeColor(severity: string): string {
  switch (severity) {
    case 'red':
      return 'bg-red-500';
    case 'amber':
      return 'bg-amber-500';
    case 'green':
      return 'bg-green-500';
    default:
      return 'bg-gray-500';
  }
}

export function formatPPE(ppe: string): string {
  return ppe
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (l) => l.toUpperCase());
}
