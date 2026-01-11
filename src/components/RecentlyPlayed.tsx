import React from 'react';
import { useProgression } from '@/contexts/ProgressionContext';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Play } from 'lucide-react';
import { motion } from 'framer-motion';

export const RecentlyPlayed: React.FC = () => {
  const { getRecentlyPlayed } = useProgression();
  const navigate = useNavigate();
  const recentGames = getRecentlyPlayed();

  if (recentGames.length === 0) {
    return null;
  }

  const formatTimeAgo = (timestamp: string) => {
    const now = new Date();
    const then = new Date(timestamp);
    const diffMs = now.getTime() - then.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays === 1) return 'Yesterday';
    return `${diffDays}d ago`;
  };

  return (
    <Card className="bg-gamer-card border-gamer-border">
      <CardHeader>
        <CardTitle className="text-gamer-text flex items-center gap-2">
          <Clock className="h-5 w-5" />
          Recently Played
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {recentGames.slice(0, 5).map((game, index) => (
            <motion.div
              key={`${game.gameId}-${game.timestamp}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between p-3 rounded-lg bg-gamer-bg/50 hover:bg-gamer-bg transition-colors"
            >
              <div className="flex-1">
                <p className="text-sm font-semibold text-gamer-text">{game.gameName}</p>
                <p className="text-xs text-gamer-muted">{formatTimeAgo(game.timestamp)}</p>
              </div>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => navigate(`/games/${game.gameId}`)}
                className="text-gamer-accent hover:text-gamer-accent hover:bg-gamer-accent/10"
              >
                <Play className="h-4 w-4" />
              </Button>
            </motion.div>
          ))}
        </div>
        
        {recentGames.length > 5 && (
          <Button
            variant="ghost"
            className="w-full mt-4 text-gamer-muted hover:text-gamer-text"
            onClick={() => navigate('/games')}
          >
            View all {recentGames.length} games
          </Button>
        )}
      </CardContent>
    </Card>
  );
};
