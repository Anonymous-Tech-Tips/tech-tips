import polyTrack from "@/assets/thumbnails/poly-track.jpg";
import cookieClicker from "@/assets/thumbnails/cookie-clicker.jpg";
import driveMad from "@/assets/thumbnails/drive-mad.jpg";
import game2048 from "@/assets/thumbnails/2048.jpg";
import slope from "@/assets/thumbnails/slope.jpg";
import bitlife from "@/assets/thumbnails/bitlife.jpg";
import retroBowl from "@/assets/thumbnails/retro-bowl.jpg";
import fallback from "@/assets/thumbnails/_fallback.png";

export interface Game {
  id: string;
  title: string;
  tags: string[];
  thumbnail: string;
  url: string;
  featured?: boolean;
}

export const games: Game[] = [
  // --- Popular 🔥 ---
  {
    id: "cookie-clicker",
    title: "Cookie Clicker",
    tags: ["idle", "clicker"],
    thumbnail: cookieClicker,
    url: "https://scherb96.github.io/",
    featured: true,
  },
  {
    id: "2048",
    title: "2048",
    tags: ["puzzle", "numbers"],
    thumbnail: game2048,
    url: "https://lizzyben1.github.io/poopygamesbeta/play/2048/",
    featured: true,
  },
  {
    id: "retro-bowl",
    title: "Retro Bowl",
    tags: ["sports", "football"],
    thumbnail: retroBowl,
    url: "https://vaz63.github.io/g5/class-400/",
    featured: true,
  },
  {
    id: "slope",
    title: "Slope",
    tags: ["arcade", "reflex"],
    thumbnail: slope,
    url: "https://lizzyben1.github.io/poopygamesbeta/play/slope/",
    featured: true,
  },
  {
    id: "poly-track",
    title: "Poly Track",
    tags: ["racing", "arcade"],
    thumbnail: polyTrack,
    url: "https://iliill1.github.io/polytrackfix/polytrack/",
    featured: true,
  },
  {
    id: "bitlife",
    title: "Bitlife",
    tags: ["sim", "life"],
    thumbnail: bitlife,
    url: "https://vaz63.github.io/g5/class-441",
    featured: true,
  },
  {
    id: "drive-mad",
    title: "Drive Mad",
    tags: ["cars", "physics"],
    thumbnail: driveMad,
    url: "https://lizzyben1.github.io/poopygamesbeta/play/drive-mad/",
    featured: true,
  },
  {
    id: "monkey-mart",
    title: "Monkey Mart",
    tags: ["management", "idle"],
    thumbnail: fallback,
    url: "https://vaz63.github.io/g77/class-829",
    featured: true,
  },
  // --- All Games ---
  {
    id: "fireboy-watergirl",
    title: "Fireboy and Watergirl 1: Forest Temple",
    tags: ["puzzle", "adventure"],
    thumbnail: fallback,
    url: "https://vaz63.github.io/g177/class-346",
  },
  {
    id: "bob-robber-4",
    title: "Bob the Robber 4",
    tags: ["stealth", "strategy"],
    thumbnail: fallback,
    url: "https://vaz63.github.io/g97/class-568",
  },
  {
    id: "raft-wars",
    title: "Raft Wars",
    tags: ["shooting", "strategy"],
    thumbnail: fallback,
    url: "https://vaz63.github.io/g5/class-409",
  },
  {
    id: "basketball-stars",
    title: "Basketball Stars",
    tags: ["sports", "basketball", "arcade"],
    thumbnail: fallback,
    url: "https://vaz63.github.io/g5/class-449",
    featured: true,
  },
  {
    id: "tomb-of-mask",
    title: "Tomb Of The Mask",
    tags: ["arcade", "maze"],
    thumbnail: fallback,
    url: "https://vaz63.github.io/g26/class-438",
  },
  {
    id: "moto-x3m-2",
    title: "Moto X3m 2",
    tags: ["racing", "motorcycle"],
    thumbnail: fallback,
    url: "https://vaz63.github.io/g26/class-459",
  },
];
