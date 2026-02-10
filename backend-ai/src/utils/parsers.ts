export function extractJSON(text: string): any {
  // Try direct parse first
  try {
    return JSON.parse(text);
  } catch {}

  // Try extracting from markdown code fences
  const fenceMatch = text.match(/```(?:json)?\s*\n?([\s\S]*?)\n?```/);
  if (fenceMatch) {
    try {
      return JSON.parse(fenceMatch[1].trim());
    } catch {}
  }

  // Try finding JSON object in text
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (jsonMatch) {
    try {
      return JSON.parse(jsonMatch[0]);
    } catch {}
  }

  throw new Error('Could not extract valid JSON from response');
}
