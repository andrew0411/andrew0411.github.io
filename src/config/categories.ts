export const categories = [
  { id: 'paper-review', name: 'Paper Review' },
  { id: 'personal',     name: 'Personal' },
  { id: 'research',     name: 'Research' },
  { id: 'AI',           name: 'AI' }
] as const;

export type CategoryId = typeof categories[number]['id'];
