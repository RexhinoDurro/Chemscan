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
      return 'bg-red-500/10 text-red-300 border-red-500/20';
    case 'amber':
      return 'bg-amber-500/10 text-amber-300 border-amber-500/20';
    case 'green':
      return 'bg-green-500/10 text-green-300 border-green-500/20';
    default:
      return 'bg-white/5 text-gray-300 border-white/10';
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
