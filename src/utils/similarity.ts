type Item = { id: string; title: string; tags?: string[] };
export function similarItems<T extends Item>(all: T[], target: T, n = 6): T[] {
  const t = new Set((target.tags ?? []).map(s => s.toLowerCase()));
  const scored = all
    .filter(x => x.id !== target.id)
    .map(x => {
      const score = (x.tags ?? []).reduce((acc, tag) => acc + (t.has(tag.toLowerCase()) ? 1 : 0), 0);
      return { x, score };
    })
    .sort((a,b) => b.score - a.score || a.x.title.localeCompare(b.x.title))
    .slice(0, n)
    .map(s => s.x);
  return scored;
}
