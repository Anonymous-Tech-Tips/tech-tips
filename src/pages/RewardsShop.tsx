import React from 'react';
import { useRewards } from '@/contexts/RewardsContext';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const rewards = [
  {
    id: 'ad-free-experience',
    name: 'Ad-Free Experience',
    description: 'Remove all ads from the site permanently',
    cost: 2500,
    icon: '🚫',
  },
  {
    id: 'premium-games-pack',
    name: 'Premium Games Collection',
    description: 'Unlock 50+ exclusive premium games',
    cost: 3000,
    icon: '🎮',
  },
  {
    id: 'vip-status',
    name: 'VIP Status',
    description: 'Get VIP badge, priority support, and exclusive features',
    cost: 5000,
    icon: '👑',
  },
  {
    id: 'custom-theme-editor',
    name: 'Theme Editor Pro',
    description: 'Create and save unlimited custom color themes',
    cost: 1500,
    icon: '🎨',
  },
  {
    id: 'game-request',
    name: 'Personal Game Request',
    description: 'Request any game to be added to the site',
    cost: 2000,
    icon: '🎯',
  },
  {
    id: 'double-points',
    name: 'Double Points Week',
    description: 'Earn 2x points on all activities for 7 days',
    cost: 1200,
    icon: '⚡',
  },
  {
    id: 'name-glow',
    name: 'Glowing Username',
    description: 'Make your name glow with animated effects',
    cost: 800,
    icon: '✨',
  },
  {
    id: 'early-access',
    name: 'Early Access Pass',
    description: 'Try new games and features before anyone else',
    cost: 1800,
    icon: '🔓',
  },
  {
    id: 'profile-customization',
    name: 'Ultimate Profile Pack',
    description: 'Unlock all avatar frames, badges, and profile effects',
    cost: 2200,
    icon: '🎭',
  },
  {
    id: 'game-stats',
    name: 'Advanced Stats Tracker',
    description: 'Detailed analytics and statistics for all your games',
    cost: 1000,
    icon: '📊',
  },
];

const RewardsShop: React.FC = () => {
  const { points, purchaseItem, purchases } = useRewards();

  const handlePurchase = (itemId: string, cost: number, name: string) => {
    if (purchases.includes(itemId)) {
      toast.info('You already own this item!');
      return;
    }

    if (purchaseItem(itemId, cost)) {
      toast.success(`Purchased ${name}!`, {
        description: `Enjoy your new ${name.toLowerCase()}!`,
      });
    } else {
      toast.error('Not enough points!', {
        description: `You need ${cost - points} more points to buy this.`,
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen bg-gamer-bg">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-rowdies font-bold mb-2 text-gamer-text">Rewards Shop 🎁</h1>
        <div className="text-2xl font-semibold text-gamer-accent flex items-center justify-center gap-2">
          <span className="text-3xl">🪙</span>
          {points} Points
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rewards.map((reward) => (
          <motion.div
            key={reward.id}
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Card className="h-full flex flex-col bg-gamer-card border-gamer-border">
              <CardHeader>
                <div className="text-4xl mb-2">{reward.icon}</div>
                <CardTitle className="text-gamer-text">{reward.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gamer-muted">{reward.description}</p>
                <p className="mt-2 text-gamer-accent font-semibold">
                  {reward.cost} Points
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={() => handlePurchase(reward.id, reward.cost, reward.name)}
                  disabled={purchases.includes(reward.id)}
                  className={`w-full transition-all ${
                    purchases.includes(reward.id)
                      ? 'bg-accent/80 hover:bg-accent text-gamer-card cursor-default'
                      : 'bg-gamer-accent hover:bg-gamer-accent/90 text-gamer-card'
                  }`}
                >
                  {purchases.includes(reward.id) ? '✓ Owned' : 'Purchase'}
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RewardsShop;
