import { useUserPrefs } from '@/contexts/UserPrefsContext';
export function StreakBadge() {
  const { prefs } = useUserPrefs();
  if (!prefs.settings.streakCount) return null;
  return <span className="rounded-full bg-amber-500/20 text-amber-300 px-2 py-1 text-xs">🔥 {prefs.settings.streakCount} day streak</span>;
}
