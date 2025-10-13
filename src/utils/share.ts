import { canonical } from '@/lib/paths';

export const encodeCollection = (ids: string[]) =>
  canonical(`/#/collections?ids=${encodeURIComponent(ids.join(','))}`);

export const parseIds = (search: string): string[] => {
  const p = new URLSearchParams(search);
  const s = p.get('ids'); if (!s) return [];
  return s.split(',').map(x => x.trim()).filter(Boolean);
};
