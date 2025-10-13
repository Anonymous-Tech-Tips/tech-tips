import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { z } from 'zod';
import { UserPrefsSchema, type UserPrefs } from '@/lib/schemas';

const KEY = 'atts:prefs:v1';

const defaultPrefs: UserPrefs = {
  favorites: [],
  history: [],
  settings: {
    theme: 'gamer',
    reducedMotion: false,
    studyMode: false,
    soundEnabled: true,
    onboardingCompleted: false,
    streakCount: 0,
    lastVisitDate: undefined
  },
  collections: []
};

type Ctx = {
  prefs: UserPrefs;
  toggleFavorite: (id: string) => void;
  pushHistory: (itemId: string, itemType: 'game'|'utility'|'guide') => void;
  setSetting: <K extends keyof UserPrefs['settings']>(k: K, v: UserPrefs['settings'][K]) => void;
  resetPrefs: () => void;
  exportPrefs: () => string;
  importPrefs: (json: string) => boolean;
};

const C = createContext<Ctx | null>(null);
export const useUserPrefs = () => {
  const ctx = useContext(C);
  if (!ctx) throw new Error('useUserPrefs outside provider');
  return ctx;
};

const safeParse = (raw: string | null): UserPrefs => {
  if (!raw) return defaultPrefs;
  try {
    const obj = JSON.parse(raw);
    return UserPrefsSchema.parse(obj);
  } catch {
    return defaultPrefs;
  }
};

export const UserPrefsProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [prefs, setPrefs] = useState<UserPrefs>(() => safeParse(localStorage.getItem(KEY)));

  // streaks
  useEffect(() => {
    const today = new Date().toDateString();
    const last = prefs.settings.lastVisitDate;
    if (last === today) return;
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    const streakCount = last === yesterday ? (prefs.settings.streakCount ?? 0) + 1 : 1;
    setPrefs(p => ({ ...p, settings: { ...p.settings, lastVisitDate: today, streakCount }}));
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(prefs));
  }, [prefs]);

  const api = useMemo<Ctx>(() => ({
    prefs,
    toggleFavorite: (id) => {
      setPrefs(p => {
        const exists = p.favorites.includes(id);
        return { ...p, favorites: exists ? p.favorites.filter(x => x !== id) : [...p.favorites, id] };
      });
    },
    pushHistory: (itemId, itemType) => {
      setPrefs(p => {
        const now = new Date().toISOString();
        const next = [{ itemId, itemType, timestamp: now }, ...p.history].slice(0, 50);
        return { ...p, history: next };
      });
    },
    setSetting: (k, v) => setPrefs(p => ({ ...p, settings: { ...p.settings, [k]: v } })),
    resetPrefs: () => setPrefs(defaultPrefs),
    exportPrefs: () => JSON.stringify(prefs, null, 2),
    importPrefs: (json) => {
      try {
        const parsed = UserPrefsSchema.parse(JSON.parse(json));
        setPrefs(parsed);
        return true;
      } catch { return false; }
    }
  }), [prefs]);

  return <C.Provider value={api}>{children}</C.Provider>;
};
