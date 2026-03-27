export const categories = [
  { id: 'paper-review', name: 'Paper Review' },
  { id: 'personal',     name: 'Personal' },
  { id: 'research',     name: 'Research' },
  { id: 'AI',           name: 'AI' },
  { id: 'mathematics',  name: 'Mathematics' },
  { id: 'finance',      name: 'Finance' }
] as const;

export type CategoryId = typeof categories[number]['id'];
