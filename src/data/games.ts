import polyTrack from "@/assets/thumbnails/poly-track.jpg";
import cookieClicker from "@/assets/thumbnails/cookie-clicker.jpg";
import driveMad from "@/assets/thumbnails/drive-mad.jpg";
import game2048 from "@/assets/thumbnails/2048.jpg";
import slope from "@/assets/thumbnails/slope.jpg";
import bitlife from "@/assets/thumbnails/bitlife.jpg";
import retroBowl from "@/assets/thumbnails/retro-bowl.jpg";
import superMarioBros from "@/assets/thumbnails/super-mario-bros.jpg";
import oneVOneLol from "@/assets/thumbnails/1v1-lol.jpg";
import flappyBird from "@/assets/thumbnails/flappy-bird.jpg";
import subwaySurfers from "@/assets/thumbnails/subway-surfers.jpg";
import yohohoIo from "@/assets/thumbnails/yohoho-io.jpg";
import basketballStars from "@/assets/thumbnails/basketball-stars.jpg";
import ovo from "@/assets/thumbnails/ovo.jpg";
import basketBros from "@/assets/thumbnails/basket-bros.jpg";
import bobRobber4 from "@/assets/thumbnails/bob-robber-4.jpg";
import carDriftRacers2 from "@/assets/thumbnails/car-drift-racers-2.jpg";
import crossyRoad from "@/assets/thumbnails/crossy-road.jpg";
import secretTreasure from "@/assets/thumbnails/secret-treasure.jpg";
import experimentalRacer from "@/assets/thumbnails/experimental-racer.jpg";
import escapingPrison from "@/assets/thumbnails/escaping-prison.jpg";
import fireboyWatergirl from "@/assets/thumbnails/fireboy-watergirl.jpg";
import fireboyWatergirl4 from "@/assets/thumbnails/fireboy-watergirl-4.jpg";
import furiousRacing3d from "@/assets/thumbnails/furious-racing-3d.jpg";
import monkeyMart from "@/assets/thumbnails/monkey-mart.jpg";
import motoX3m2 from "@/assets/thumbnails/moto-x3m-2.jpg";
import raftWars from "@/assets/thumbnails/raft-wars.jpg";
import redBall4 from "@/assets/thumbnails/red-ball-4.jpg";
import rooftopSnipers from "@/assets/thumbnails/rooftop-snipers.jpg";
import sausageFlip from "@/assets/thumbnails/sausage-flip.jpg";
import slope2 from "@/assets/thumbnails/slope-2.jpg";
import slope3 from "@/assets/thumbnails/slope-3.jpg";
import soccerRandom from "@/assets/thumbnails/soccer-random.jpg";
import speedPoolKing from "@/assets/thumbnails/speed-pool-king.jpg";
import stickmanClimb2 from "@/assets/thumbnails/stickman-climb-2.jpg";
import stickmanHook from "@/assets/thumbnails/stickman-hook.jpg";
import tombOfMask from "@/assets/thumbnails/tomb-of-mask.jpg";
import tunnelRush from "@/assets/thumbnails/tunnel-rush.jpg";
import waterColorSort from "@/assets/thumbnails/water-color-sort.jpg";
import fallback from "@/assets/thumbnails/_fallback.png";

export interface Game {
  id: string;
  title: string;
  tags: string[];
  thumbnail: string;
  url: string;
  featured?: boolean;
  premium?: boolean;
  secret?: boolean;
  earlyAccess?: boolean;
}

export const games: Game[] = [
  // --- 🔥 Most Popular Games (Featured) ---
  {
    id: "slope",
    title: "Slope",
    tags: ["arcade", "reflex"],
    thumbnail: slope,
    url: "https://lizzyben1.github.io/poopygamesbeta/play/slope/",
    featured: true,
  },
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
    id: "1v1-lol",
    title: "1v1.lol",
    tags: ["shooter", "battle royale", "multiplayer"],
    thumbnail: oneVOneLol,
    url: "https://vaz63.github.io/g77/class-439",
    featured: true,
  },
  {
    id: "subway-surfers-newyork",
    title: "Subway Surfers New York",
    tags: ["endless runner", "arcade"],
    thumbnail: subwaySurfers,
    url: "https://vaz63.github.io/g26/class-444",
    featured: true,
  },
  {
    id: "super-mario-bros",
    title: "Super Mario Bros",
    tags: ["platform", "classic"],
    thumbnail: superMarioBros,
    url: "https://math181124.github.io/g/class-826",
    featured: true,
  },
  {
    id: "tunnel-rush",
    title: "Tunnel Rush",
    tags: ["arcade", "reflex", "tunnel"],
    thumbnail: tunnelRush,
    url: "https://vaz63.github.io/g5/class-404",
    featured: true,
  },
  {
    id: "ovo",
    title: "Ovo",
    tags: ["action", "adventure", "platformer"],
    thumbnail: ovo,
    url: "https://vaz63.github.io/g5/class-456",
    featured: true,
  },
  {
    id: "monkey-mart",
    title: "Monkey Mart",
    tags: ["management", "idle"],
    thumbnail: monkeyMart,
    url: "https://vaz63.github.io/g77/class-829",
    featured: true,
  },

  // --- 🎮 All Games (Alphabetical) ---
  {
    id: "bob-robber-4",
    title: "Bob the Robber 4",
    tags: ["stealth", "strategy"],
    thumbnail: bobRobber4,
    url: "https://vaz63.github.io/g97/class-568",
  },
  {
    id: "car-drift-racers-2",
    title: "Car Drift Racers 2",
    tags: ["racing", "cars"],
    thumbnail: carDriftRacers2,
    url: "https://vaz63.github.io/g3/class-601",
  },
  {
    id: "crossy-road",
    title: "Crossy Road",
    tags: ["arcade", "endless runner"],
    thumbnail: crossyRoad,
    url: "https://vaz63.github.io/g20/class-402",
  },
  {
    id: "drive-mad",
    title: "Drive Mad",
    tags: ["cars", "physics"],
    thumbnail: driveMad,
    url: "https://lizzyben1.github.io/poopygamesbeta/play/drive-mad/",
    premium: true,
  },
  {
    id: "escaping-prison",
    title: "Escaping The Prison",
    tags: ["adventure", "escape"],
    thumbnail: escapingPrison,
    url: "https://vaz63.github.io/g97/class-780",
  },
  {
    id: "experimental-racer",
    title: "🔓 Experimental Racer",
    tags: ["racing", "experimental", "early access"],
    thumbnail: experimentalRacer,
    url: "https://vaz63.github.io/g3/class-601",
    earlyAccess: true,
  },
  {
    id: "fireboy-watergirl",
    title: "Fireboy and Watergirl 1: Forest Temple",
    tags: ["puzzle", "adventure"],
    thumbnail: fireboyWatergirl,
    url: "https://vaz63.github.io/g177/class-346",
  },
  {
    id: "fireboy-watergirl-4",
    title: "Fireboy and Watergirl 4: Crystal Temple",
    tags: ["puzzle", "adventure", "cooperative"],
    thumbnail: fireboyWatergirl4,
    url: "https://vaz63.github.io/g177/class-343",
  },
  {
    id: "flappy-bird",
    title: "Flappy Bird",
    tags: ["arcade", "reflex"],
    thumbnail: flappyBird,
    url: "https://vaz63.github.io/g26/class-434",
  },
  {
    id: "furious-racing-3d",
    title: "Furious Racing 3D",
    tags: ["racing", "cars"],
    thumbnail: furiousRacing3d,
    url: "https://math181124.github.io/g97/class-793",
  },
  {
    id: "moto-x3m-2",
    title: "Moto X3M 2",
    tags: ["racing", "motorcycle"],
    thumbnail: motoX3m2,
    url: "https://vaz63.github.io/g26/class-459",
  },
  {
    id: "poly-track",
    title: "Poly Track",
    tags: ["racing", "arcade"],
    thumbnail: polyTrack,
    url: "https://iliill1.github.io/polytrackfix/polytrack/",
  },
  {
    id: "raft-wars",
    title: "Raft Wars",
    tags: ["shooting", "strategy"],
    thumbnail: raftWars,
    url: "https://vaz63.github.io/g5/class-409",
  },
  {
    id: "red-ball-4",
    title: "Red Ball 4",
    tags: ["adventure", "platform"],
    thumbnail: redBall4,
    url: "https://vaz63.github.io/g22/class-491",
  },
  {
    id: "rooftop-snipers",
    title: "Rooftop Snipers",
    tags: ["shooter", "multiplayer"],
    thumbnail: rooftopSnipers,
    url: "https://vaz63.github.io/g5/class-481",
  },
  {
    id: "sausage-flip",
    title: "Sausage Flip",
    tags: ["arcade", "physics"],
    thumbnail: sausageFlip,
    url: "https://vaz63.github.io/g2/class-415",
  },
  {
    id: "poly-track-premium",
    title: "🎁 Secret Treasure Quest",
    tags: ["adventure", "puzzle", "secret"],
    thumbnail: secretTreasure,
    url: "https://vaz63.github.io/g97/class-568",
    secret: true,
  },
  {
    id: "slope-2",
    title: "Slope 2",
    tags: ["arcade", "reflex"],
    thumbnail: slope2,
    url: "https://vaz63.github.io/g2/class-437",
  },
  {
    id: "slope-3",
    title: "Slope 3",
    tags: ["arcade", "reflex"],
    thumbnail: slope3,
    url: "https://vaz63.github.io/g5/class-501",
  },
  {
    id: "soccer-random",
    title: "Soccer Random",
    tags: ["sports", "soccer"],
    thumbnail: soccerRandom,
    url: "https://vaz63.github.io/g26/class-511",
  },
  {
    id: "speed-pool-king",
    title: "Speed Pool King",
    tags: ["sports", "pool", "billiards"],
    thumbnail: speedPoolKing,
    url: "https://math181124.github.io/g6/class-146",
  },
  {
    id: "stickman-climb-2",
    title: "Stickman Climb 2",
    tags: ["arcade", "stickman", "platform"],
    thumbnail: stickmanClimb2,
    url: "https://vaz63.github.io/g2/class-426",
  },
  {
    id: "stickman-hook",
    title: "Stickman Hook",
    tags: ["arcade", "stickman"],
    thumbnail: stickmanHook,
    url: "https://vaz63.github.io/g5/class-406",
  },
  {
    id: "tomb-of-mask",
    title: "Tomb Of The Mask",
    tags: ["arcade", "maze"],
    thumbnail: tombOfMask,
    url: "https://vaz63.github.io/g26/class-438",
  },
  {
    id: "water-color-sort",
    title: "Water Color Sort",
    tags: ["puzzle", "casual"],
    thumbnail: waterColorSort,
    url: "https://vaz63.github.io/g69/class-635",
  },
  {
    id: "yohoho-io",
    title: "YoHoHo.io",
    tags: ["io", "battle royale", "multiplayer"],
    thumbnail: yohohoIo,
    url: "https://math181124.github.io/g77/class-828",
  },

  // --- 🆕 Additional Games from TopVAZ ---
  { id: "idle-digging-tycoon", title: "Idle Digging Tycoon", tags: ["idle", "clicker", "mining"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-581" },
  { id: "skibidi-shooter", title: "Skibidi Shooter", tags: ["shooter", "action"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-392" },
  { id: "moto-x3m", title: "Moto X3m", tags: ["racing", "motorcycle"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-458" },
  { id: "brain-test", title: "Brain Test: Tricky Puzzles", tags: ["puzzle", "brain teaser"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-422" },
  { id: "house-of-hazards", title: "House Of Hazards", tags: ["multiplayer", "party"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-490" },
  { id: "battle-wheels", title: "Battle Wheels", tags: ["racing", "combat"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-647" },
  { id: "little-master-cricket", title: "Little Master Cricket", tags: ["sports", "cricket"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-386" },
  { id: "blumgi-slime", title: "Blumgi Slime", tags: ["arcade", "platformer"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-421" },
  { id: "blumgi-rocket", title: "Blumgi Rocket", tags: ["arcade", "physics"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-413" },
  { id: "stickman-archero-fight", title: "Stickman Archero Fight", tags: ["action", "stickman"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-6" },
  { id: "archer-master-3d", title: "Archer Master 3D Castle Defense", tags: ["shooting", "strategy"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-340" },
  { id: "tiny-fishing", title: "Tiny Fishing", tags: ["casual", "fishing"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-451" },
  { id: "moto-x3m-spooky", title: "Moto X3m Spooky Land", tags: ["racing", "motorcycle"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-461" },
  { id: "run-3-editor", title: "Run 3 Editor", tags: ["endless runner", "arcade"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-819" },
  { id: "fnf-vs-xe", title: "Friday Night Funkin vs XE", tags: ["rhythm", "music"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-350" },
  { id: "merge-cyber-racers", title: "Merge Cyber Racers", tags: ["racing", "merge"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-595" },
  { id: "master-chess", title: "Master Chess", tags: ["board game", "strategy"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-506" },
  { id: "shady-bears", title: "Shady Bears", tags: ["adventure", "puzzle"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-379" },
  { id: "tag-2", title: "Tag 2", tags: ["multiplayer", "chase"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-364" },
  { id: "murder", title: "Murder", tags: ["stealth", "mystery"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-580" },
  { id: "growmi", title: "Growmi", tags: ["puzzle", "platformer"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-182" },
  { id: "g-switch-4", title: "G-switch 4", tags: ["arcade", "reflex"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-366" },
  { id: "flip-runner", title: "Flip Runner", tags: ["arcade", "runner"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-335" },
  { id: "blumgi-dragon", title: "Blumgi Dragon", tags: ["arcade", "adventure"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-363" },
  { id: "fnf-shaggy-matt", title: "Friday Night Funkin vs Shaggy x Matt", tags: ["rhythm", "music"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-347" },
  { id: "burnout-drift-2", title: "Burnout Extreme Drift 2", tags: ["racing", "drift"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-304" },
  { id: "among-us", title: "Among Us", tags: ["multiplayer", "mystery"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-468" },
  { id: "g-switch-3", title: "G Switch 3", tags: ["arcade", "reflex"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-403" },
  { id: "poor-bunny", title: "Poor Bunny", tags: ["puzzle", "casual"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-548" },
  { id: "doge-miner", title: "Doge Miner", tags: ["idle", "clicker"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-476" },
  { id: "masked-forces", title: "Masked Forces", tags: ["shooter", "3d"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-525" },
  { id: "traffic-escape", title: "Traffic Escape", tags: ["puzzle", "casual"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-357" },
  { id: "hills-of-steel", title: "Hills Of Steel", tags: ["action", "tanks"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-359" },
  { id: "parking-fury-night", title: "Parking Fury 3D: Night Thief", tags: ["driving", "parking"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-725" },
  { id: "rocket-soccer-derby", title: "Rocket Soccer Derby", tags: ["sports", "soccer"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-527" },
  { id: "gunspin", title: "Gunspin", tags: ["arcade", "shooter"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-533" },
  { id: "zeepkist-crash", title: "Zeepkist: Crash 2D", tags: ["racing", "physics"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-351" },
  { id: "tetris-flash", title: "Tetris Flash", tags: ["puzzle", "classic"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-455" },
  { id: "make-it-meme", title: "Make it meme", tags: ["party", "creative"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-368" },
  { id: "madalin-stunt-cars-3", title: "Madalin Stunt Cars 3", tags: ["racing", "3d", "stunts"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-566" },
  { id: "flip-bros", title: "Flip Bros", tags: ["arcade", "multiplayer"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-358" },
  { id: "we-become-what-we-behold", title: "We Become What We Behold", tags: ["puzzle", "story"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-485" },
  { id: "top-speed-3d", title: "Top Speed 3d", tags: ["racing", "cars"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-583" },
  { id: "temple-of-boom", title: "Temple Of Boom", tags: ["shooter", "multiplayer"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-411" },
  { id: "eggy-car", title: "Eggy Car", tags: ["racing", "physics"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-463" },
  { id: "big-shot-boxing", title: "Big Shot Boxing", tags: ["sports", "boxing"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-529" },
  { id: "fnf-b-sides", title: "Friday Night Funkin B-Sides", tags: ["rhythm", "music"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-348" },
  { id: "idle-ants", title: "Idle Ants", tags: ["idle", "clicker"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-631" },
  { id: "getaway-shootout", title: "Getaway Shootout", tags: ["shooter", "multiplayer"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-479" },
  { id: "city-car-driving", title: "City Car Driving: Stunt Master", tags: ["racing", "stunts"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-582" },
  { id: "dreadhead-parkour", title: "Dreadhead Parkour", tags: ["parkour", "platformer"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-412" },
  { id: "super-liquid-soccer", title: "Super Liquid Soccer", tags: ["sports", "soccer"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-628" },
  { id: "slopey", title: "Slopey", tags: ["arcade", "reflex"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-399" },
  { id: "moto-road-rash", title: "Moto Road Rash 3D", tags: ["racing", "motorcycle"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-464" },
  { id: "swingo", title: "Swingo", tags: ["arcade", "casual"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-636" },
  { id: "impossible-quiz", title: "The Impossible Quiz", tags: ["quiz", "puzzle"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-480" },
  { id: "tank-ball", title: "Tank Ball: Monster Battle", tags: ["action", "tanks"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-4" },
  { id: "2-minute-football", title: "2 minute football", tags: ["sports", "football"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-370" },
  { id: "fury-wars", title: "Fury wars", tags: ["action", "shooter"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-378" },
  { id: "traffic-rush", title: "Traffic Rush", tags: ["racing", "arcade"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-393" },
  { id: "temple-run-2", title: "Temple Run 2", tags: ["endless runner", "arcade"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-405" },
  { id: "super-star-car", title: "Super Star Car", tags: ["racing", "cars"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-630" },
  { id: "blumgi-ball", title: "Blumgi Ball", tags: ["sports", "basketball"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-419" },
  { id: "offroader-v5", title: "Offroader V5", tags: ["racing", "offroad"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-751" },
  { id: "ragdoll-hit", title: "Ragdoll Hit", tags: ["action", "physics"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-12" },
  { id: "bacon-may-die", title: "Bacon May Die", tags: ["action", "fighting"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-334" },
  { id: "highway-traffic", title: "Highway Traffic", tags: ["racing", "arcade"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-522" },
  { id: "stick-merge", title: "Stick Merge", tags: ["idle", "merge"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-410" },
  { id: "tag", title: "Tag", tags: ["multiplayer", "chase"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-633" },
  { id: "bitlife", title: "Bitlife", tags: ["simulation", "life"], thumbnail: bitlife, url: "https://vaz63.github.io/g72/class-441" },
  { id: "flappy-bird-origin", title: "Flappy Bird Origin", tags: ["arcade", "reflex"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-434" },
  { id: "cluster-rush", title: "Cluster Rush", tags: ["arcade", "platformer"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-526" },
  { id: "tiger-simulator-3d", title: "Tiger Simulator 3d", tags: ["simulation", "3d"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-587" },
  { id: "penalty-shooters-2", title: "Penalty Shooters 2", tags: ["sports", "soccer"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-627" },
  { id: "drift-hunters", title: "Drift Hunters", tags: ["racing", "drift"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-447" },
  { id: "basketball-legends", title: "Basketball Legends", tags: ["sports", "basketball"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-474" },
  { id: "tanuki-sunset", title: "Tanuki Sunset", tags: ["arcade", "skateboarding"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-488" },
  { id: "n-gon", title: "N Gon", tags: ["platformer", "physics"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-528" },
  { id: "drift-boss", title: "Drift Boss", tags: ["racing", "drift"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-472" },
  { id: "paper-io-2", title: "Paper Io 2", tags: ["io", "strategy"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-505" },
  { id: "jumping-shell", title: "Jumping Shell", tags: ["arcade", "platformer"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-638" },
  { id: "level-devil", title: "Level Devil", tags: ["platformer", "puzzle"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-356" },
  { id: "fnf-vs-miku", title: "Friday Night Funkin vs Hatsune Miku", tags: ["rhythm", "music"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-349" },
  { id: "parkour-race", title: "Parkour Race", tags: ["parkour", "racing"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-830" },
  { id: "stick-defenders", title: "Stick Defenders", tags: ["action", "stickman"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-416" },
  { id: "rooftop-snipers-2", title: "Rooftop Snipers 2", tags: ["shooter", "multiplayer"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-424" },
  { id: "fruit-ninja", title: "Fruit Ninja", tags: ["arcade", "casual"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-22" },
  { id: "highway-bike-sim", title: "Highway Bike Simulator", tags: ["racing", "motorcycle"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-314" },
  { id: "stacktris", title: "Stacktris", tags: ["puzzle", "arcade"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-417" },
  { id: "soccer-skills-cl", title: "Soccer Skills Champions League", tags: ["sports", "soccer"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-588" },
  { id: "rush-race-motocross", title: "Rush Race Motocross", tags: ["racing", "motorcycle"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-10" },
  { id: "gobble", title: "Gobble", tags: ["arcade", "casual"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-420" },
  { id: "unicycle-hero", title: "Unicycle Hero", tags: ["sports", "balance"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-684" },
  { id: "chicken-merge", title: "Chicken Merge", tags: ["idle", "merge"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-641" },
  { id: "eugenes-life", title: "Eugenes Life", tags: ["adventure", "story"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-589" },
  { id: "idle-lumber-inc", title: "Idle Lumber Inc", tags: ["idle", "clicker"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-586" },
  { id: "village-craft", title: "Village Craft", tags: ["sandbox", "building"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-389" },
  { id: "gold-digger-frvr", title: "Gold Digger Frvr", tags: ["arcade", "mining"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-584" },
  { id: "moto-x3m-winter", title: "Moto X3m Winter", tags: ["racing", "motorcycle"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-460" },
  { id: "shootz", title: "Shootz", tags: ["shooter", "action"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-394" },
  { id: "basket-random", title: "Basket Random", tags: ["sports", "basketball"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-436" },
  { id: "basket-bros", title: "Basket Bros", tags: ["sports", "basketball"], thumbnail: basketBros, url: "https://vaz63.github.io/g72/class-482" },
  { id: "bullet-bro", title: "Bullet Bro", tags: ["shooter", "action"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-29" },
  { id: "stickman-bike", title: "Stickman Bike", tags: ["racing", "stickman"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-590" },
  { id: "4th-and-goal-2022", title: "4th And Goal 2022", tags: ["sports", "football"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-685" },
  { id: "monster-tracks", title: "Monster Tracks", tags: ["racing", "trucks"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-414" },
  { id: "stair-race-3d", title: "Stair Race 3d", tags: ["racing", "casual"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-619" },
  { id: "who-is", title: "Who Is", tags: ["puzzle", "logic"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-591" },
  { id: "geometry-dash", title: "Geometry Dash", tags: ["arcade", "rhythm"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-453" },
  { id: "moto-x3m-pool", title: "Moto X3m Pool Party", tags: ["racing", "motorcycle"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-462" },
  { id: "dance-fire-ice", title: "A Dance Of Fire And Ice", tags: ["rhythm", "music"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-498" },
  { id: "soccer-skills-wc", title: "Soccer Skills World Cup", tags: ["sports", "soccer"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-423" },
  { id: "peppa-pig-basketball", title: "Peppa Pig: Basketball", tags: ["sports", "kids"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-318" },
  { id: "pop-it-master", title: "Pop It Master", tags: ["casual", "relaxing"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-592" },
  { id: "parking-fury-beach", title: "Parking Fury 3D Beach City", tags: ["driving", "parking"], thumbnail: fallback, url: "https://vaz63.github.io/g72/class-724" },
];
