// ===========================
// SHOP ITEMS CONFIGURATION
// Organized by category for meaningful progression
// ===========================

export interface ShopItem {
  id: string;
  name: string;
  description: string;
  cost: number;
  icon: string;
  category: 'visual' | 'convenience' | 'discovery' | 'profile' | 'premium';
  tier: 'starter' | 'medium' | 'advanced' | 'ultimate';
  effects?: string[];
  preview?: string;
}

export const SHOP_ITEMS: ShopItem[] = [
  // ===========================
  // VISUAL CATEGORY (50-200 points)
  // ===========================
  {
    id: 'ocean-theme',
    name: 'Ocean Breeze',
    description: 'Calming blue ocean-inspired theme',
    cost: 75,
    icon: '🌊',
    category: 'visual',
    tier: 'starter',
    effects: ['Blue gradient backgrounds', 'Wave animations'],
    preview: 'Cool blue tones with gentle wave effects',
  },
  {
    id: 'dark-mode-pro',
    name: 'Dark Mode Pro',
    description: 'OLED-optimized true black theme',
    cost: 100,
    icon: '🌙',
    category: 'visual',
    tier: 'starter',
    effects: ['True black backgrounds', 'Enhanced contrast'],
    preview: 'Perfect for night browsing and battery saving',
  },
  {
    id: 'retro-theme',
    name: 'Retro Arcade',
    description: 'Classic 80s arcade aesthetic',
    cost: 125,
    icon: '👾',
    category: 'visual',
    tier: 'medium',
    effects: ['Pixelated borders', 'Orange/cyan accents', 'Retro fonts'],
    preview: 'Nostalgic arcade vibes with pixel-perfect styling',
  },
  {
    id: 'neon-theme',
    name: 'Neon Nights',
    description: 'Electric neon with glowing effects',
    cost: 150,
    icon: '💜',
    category: 'visual',
    tier: 'medium',
    effects: ['Glowing purple/cyan', 'Neon text effects', 'Animated glow'],
    preview: 'Cyberpunk-inspired neon aesthetics',
  },
  {
    id: 'rainbow-theme',
    name: 'Rainbow Dreams',
    description: 'Vibrant rainbow gradient theme',
    cost: 150,
    icon: '🌈',
    category: 'visual',
    tier: 'medium',
    effects: ['Rainbow gradients', 'Color-shifting accents', 'Smooth transitions'],
    preview: 'Colorful and energetic rainbow styling',
  },
  {
    id: 'custom-theme-editor',
    name: 'Theme Studio',
    description: 'Create your own custom themes',
    cost: 300,
    icon: '🎨',
    category: 'visual',
    tier: 'ultimate',
    effects: ['Custom color picker', 'Save multiple themes', 'Export/import'],
    preview: 'Full creative control over your color scheme',
  },

  // ===========================
  // CONVENIENCE CATEGORY (100-400 points)
  // ===========================
  {
    id: 'unlimited-favorites',
    name: 'Unlimited Favorites',
    description: 'Save as many favorite games as you want',
    cost: 200,
    icon: '⭐',
    category: 'convenience',
    tier: 'medium',
    effects: ['No limit on favorites', 'Quick access sidebar'],
    preview: 'Never worry about favorite slots again',
  },
  {
    id: 'recently-played-tracker',
    name: 'Play History',
    description: 'Track your 20 most recently played games',
    cost: 150,
    icon: '🕐',
    category: 'convenience',
    tier: 'medium',
    effects: ['Recently played list', 'Quick resume', 'Time tracking'],
    preview: 'Easily return to your recent games',
  },
  {
    id: 'quick-launch-slots',
    name: 'Quick Launch',
    description: 'Pin 5 games for instant access',
    cost: 175,
    icon: '⚡',
    category: 'convenience',
    tier: 'medium',
    effects: ['5 pinned slots', 'Keyboard shortcuts', 'One-click launch'],
    preview: 'Lightning-fast access to your go-to games',
  },
  {
    id: 'game-notes',
    name: 'Game Notes',
    description: 'Add personal notes to any game',
    cost: 125,
    icon: '📝',
    category: 'convenience',
    tier: 'starter',
    effects: ['Write notes per game', 'Tips & strategies', 'Personal records'],
    preview: 'Keep track of strategies and high scores',
  },
  {
    id: 'auto-save-progress',
    name: 'Auto-Save',
    description: 'Automatically save your game preferences',
    cost: 100,
    icon: '💾',
    category: 'convenience',
    tier: 'starter',
    effects: ['Auto-save settings', 'Cloud sync ready', 'Never lose progress'],
    preview: 'Your preferences saved automatically',
  },
  {
    id: 'offline-mode-plus',
    name: 'Offline Mode+',
    description: 'Enhanced offline game experience',
    cost: 250,
    icon: '📡',
    category: 'convenience',
    tier: 'advanced',
    effects: ['Offline game cache', 'No-connection indicators', 'Auto-sync'],
    preview: 'Play even when internet is spotty',
  },

  // ===========================
  // DISCOVERY CATEGORY (150-500 points)
  // ===========================
  {
    id: 'smart-recommendations',
    name: 'Smart Recommendations',
    description: 'AI-powered game suggestions based on your taste',
    cost: 300,
    icon: '🧠',
    category: 'discovery',
    tier: 'advanced',
    effects: ['Personalized suggestions', 'Similar games finder', 'Hidden gems'],
    preview: 'Discover games you\'ll love',
  },
  {
    id: 'advanced-search',
    name: 'Advanced Search',
    description: 'Powerful search with filters and tags',
    cost: 175,
    icon: '🔍',
    category: 'discovery',
    tier: 'medium',
    effects: ['Multiple filters', 'Tag search', 'Sort options'],
    preview: 'Find exactly what you\'re looking for',
  },
  {
    id: 'game-collections',
    name: 'Custom Collections',
    description: 'Create and organize your own game collections',
    cost: 250,
    icon: '📚',
    category: 'discovery',
    tier: 'advanced',
    effects: ['Create collections', 'Share with friends', 'Import/export'],
    preview: 'Organize games your way',
  },
  {
    id: 'trending-insights',
    name: 'Trending Insights',
    description: 'See what\'s popular and rising',
    cost: 200,
    icon: '📈',
    category: 'discovery',
    tier: 'medium',
    effects: ['Trending games', 'Rising stars', 'Community favorites'],
    preview: 'Stay on top of what\'s hot',
  },
  {
    id: 'discovery-feed',
    name: 'Discovery Feed',
    description: 'Personalized daily game recommendations',
    cost: 350,
    icon: '🎯',
    category: 'discovery',
    tier: 'advanced',
    effects: ['Daily feed', 'New releases', 'Curated picks'],
    preview: 'Fresh discoveries every day',
  },

  // ===========================
  // PROFILE CATEGORY (200-600 points)
  // ===========================
  {
    id: 'profile-badges',
    name: 'Badge Collection',
    description: 'Unlock and display achievement badges',
    cost: 200,
    icon: '🏅',
    category: 'profile',
    tier: 'medium',
    effects: ['Achievement badges', 'Display on profile', 'Earn more badges'],
    preview: 'Show off your accomplishments',
  },
  {
    id: 'custom-title',
    name: 'Custom Titles',
    description: 'Choose from exclusive profile titles',
    cost: 250,
    icon: '✨',
    category: 'profile',
    tier: 'medium',
    effects: ['20+ titles to choose', 'Animated titles', 'Unlock more with play'],
    preview: 'Stand out with unique titles',
  },
  {
    id: 'stats-dashboard',
    name: 'Stats Dashboard',
    description: 'Detailed analytics of your gaming',
    cost: 300,
    icon: '📊',
    category: 'profile',
    tier: 'advanced',
    effects: ['Play time tracking', 'Favorite genres', 'Weekly reports'],
    preview: 'Deep insights into your gaming habits',
  },
  {
    id: 'profile-border',
    name: 'Animated Border',
    description: 'Animated profile picture border',
    cost: 175,
    icon: '🖼️',
    category: 'profile',
    tier: 'medium',
    effects: ['Choose border style', 'Animated effects', 'Color customization'],
    preview: 'Make your profile pop',
  },
  {
    id: 'activity-timeline',
    name: 'Activity Timeline',
    description: 'Visual timeline of your gaming journey',
    cost: 400,
    icon: '📅',
    category: 'profile',
    tier: 'advanced',
    effects: ['Interactive timeline', 'Milestones', 'Share highlights'],
    preview: 'Your gaming story visualized',
  },
  {
    id: 'achievement-showcase',
    name: 'Achievement Showcase',
    description: 'Highlight your best achievements',
    cost: 275,
    icon: '🏆',
    category: 'profile',
    tier: 'advanced',
    effects: ['Feature top achievements', 'Animated displays', 'Share showcase'],
    preview: 'Display your proudest moments',
  },

  // ===========================
  // PREMIUM CATEGORY (500-2000 points)
  // Long-term goals for dedicated users
  // ===========================
  {
    id: 'ad-skip-tokens-1hr',
    name: 'Ad-Skip Token (1 Hour)',
    description: 'Temporarily reduce ads for 1 hour (requires AdSense approval)',
    cost: 500,
    icon: '🚫',
    category: 'premium',
    tier: 'advanced',
    effects: ['1 hour reduced ads', 'Time-limited', 'Reusable purchase'],
    preview: 'Less interruption for focused gaming. Note: Ads will still appear but less frequently. Only available when ads are live.',
  },
  {
    id: 'ad-skip-tokens-1day',
    name: 'Ad-Skip Token (24 Hours)',
    description: 'Temporarily reduce ads for 24 hours (requires AdSense approval)',
    cost: 1500,
    icon: '⭐',
    category: 'premium',
    tier: 'ultimate',
    effects: ['24 hours reduced ads', 'Time-limited', 'Best value'],
    preview: 'Day-long reduced ad experience. Ads will still appear but less frequently. Only available when ads are live.',
  },
  {
    id: 'exclusive-games-pack',
    name: 'Exclusive Games Pack',
    description: 'Access to 10+ exclusive premium games',
    cost: 1000,
    icon: '🎮',
    category: 'premium',
    tier: 'ultimate',
    effects: ['10+ exclusive games', 'Early access', 'Premium quality'],
    preview: 'Games you won\'t find elsewhere',
  },
  {
    id: 'developer-supporter',
    name: 'Developer Supporter',
    description: 'Special badge supporting site development',
    cost: 2000,
    icon: '💝',
    category: 'premium',
    tier: 'ultimate',
    effects: ['Supporter badge', 'Special profile color', 'Thank you message'],
    preview: 'Help keep the site running',
  },
  {
    id: 'early-access-features',
    name: 'Early Access Pass',
    description: 'Try new features before everyone else',
    cost: 800,
    icon: '🚀',
    category: 'premium',
    tier: 'advanced',
    effects: ['Beta features', 'Feedback priority', 'Exclusive updates'],
    preview: 'Be the first to try new stuff',
  },
  {
    id: 'vip-status',
    name: 'VIP Status',
    description: 'Ultimate premium experience bundle',
    cost: 5000,
    icon: '👑',
    category: 'premium',
    tier: 'ultimate',
    effects: ['All premium features', 'VIP badge', 'Priority support', 'Lifetime access'],
    preview: 'The complete premium package',
  },
];

// Helper functions
export const getItemsByCategory = (category: ShopItem['category']) => {
  return SHOP_ITEMS.filter(item => item.category === category);
};

export const getItemsByTier = (tier: ShopItem['tier']) => {
  return SHOP_ITEMS.filter(item => item.tier === tier);
};

export const getItemById = (id: string) => {
  return SHOP_ITEMS.find(item => item.id === id);
};

export const CATEGORY_INFO = {
  visual: {
    name: 'Visual',
    icon: '🎨',
    description: 'Themes, colors, and visual effects',
    color: 'from-purple-500 to-pink-500',
  },
  convenience: {
    name: 'Convenience',
    icon: '⚡',
    description: 'Quality of life improvements',
    color: 'from-blue-500 to-cyan-500',
  },
  discovery: {
    name: 'Discovery',
    icon: '🔍',
    description: 'Find and explore new games',
    color: 'from-green-500 to-emerald-500',
  },
  profile: {
    name: 'Profile',
    icon: '👤',
    description: 'Customize your identity',
    color: 'from-orange-500 to-red-500',
  },
  premium: {
    name: 'Premium',
    icon: '💎',
    description: 'Ultimate upgrades and support',
    color: 'from-yellow-500 to-amber-500',
  },
};
