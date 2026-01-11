import React from 'react';
import { useProgression } from '@/contexts/ProgressionContext';
import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';
import { Card } from '@/components/ui/card';
import { Sparkles, TrendingUp } from 'lucide-react';

export const ProgressBar: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { progress, getCurrentRank, getNextRank, getXPForNextLevel, getLevelProgress } = useProgression();
  
  const currentRank = getCurrentRank();
  const nextRank = getNextRank();
  const xpNeeded = getXPForNextLevel();
  const levelProgress = getLevelProgress();

  if (compact) {
    return (
      <div className="flex items-center gap-4 bg-gamer-card/50 rounded-lg p-3 border border-gamer-border">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{currentRank.icon}</span>
          <div>
            <p className="text-xs text-gamer-muted">Level {progress.level}</p>
            <p className="text-sm font-bold text-gamer-text">{currentRank.name}</p>
          </div>
        </div>
        
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-gamer-muted">
              {progress.xp} / {xpNeeded} XP
            </span>
            {nextRank && (
              <span className="text-xs text-gamer-muted">
                Next: {nextRank.icon}
              </span>
            )}
          </div>
          <Progress value={levelProgress} className="h-2" />
        </div>
        
        <div className="text-right">
          <p className="text-xs text-gamer-muted">Points</p>
          <p className="text-lg font-bold text-gamer-accent flex items-center gap-1">
            <span>🪙</span>
            {progress.totalPoints}
          </p>
        </div>
      </div>
    );
  }

  return (
    <Card className="bg-gradient-to-br from-gamer-card to-gamer-bg border-gamer-border p-6">
      <div className="space-y-6">
        {/* Rank Display */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="text-5xl"
            >
              {currentRank.icon}
            </motion.div>
            <div>
              <p className="text-sm text-gamer-muted mb-1">Current Rank</p>
              <h2 className="text-3xl font-rowdies font-bold text-gamer-text" style={{ color: currentRank.color }}>
                {currentRank.name}
              </h2>
              <p className="text-xs text-gamer-muted mt-1">
                Level {progress.level} • {progress.totalPoints.toLocaleString()} Points
              </p>
            </div>
          </div>
          
          {nextRank && (
            <div className="text-right">
              <p className="text-sm text-gamer-muted mb-1">Next Rank</p>
              <div className="flex items-center gap-2">
                <span className="text-3xl">{nextRank.icon}</span>
                <div>
                  <p className="text-lg font-bold text-gamer-text">{nextRank.name}</p>
                  <p className="text-xs text-gamer-muted">
                    {(nextRank.minPoints - progress.totalPoints).toLocaleString()} pts to go
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Level Progress */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-amber-400" />
              <span className="text-sm font-semibold text-gamer-text">
                Level {progress.level} Progress
              </span>
            </div>
            <span className="text-sm text-gamer-muted">
              {progress.xp} / {xpNeeded} XP
            </span>
          </div>
          <Progress value={levelProgress} className="h-3" />
          <p className="text-xs text-gamer-muted mt-1 text-right">
            {Math.round(levelProgress)}% to Level {progress.level + 1}
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gamer-border">
          <div className="text-center">
            <p className="text-2xl font-bold text-gamer-accent">🔥</p>
            <p className="text-lg font-semibold text-gamer-text">{progress.streakCount}</p>
            <p className="text-xs text-gamer-muted">Day Streak</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gamer-accent">🎮</p>
            <p className="text-lg font-semibold text-gamer-text">{progress.uniqueGamesPlayed.length}</p>
            <p className="text-xs text-gamer-muted">Games Played</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gamer-accent">🏆</p>
            <p className="text-lg font-semibold text-gamer-text">{progress.milestonesAchieved.length}</p>
            <p className="text-xs text-gamer-muted">Milestones</p>
          </div>
        </div>

        {/* Rank Progress Bar */}
        {nextRank && (
          <div className="pt-4 border-t border-gamer-border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gamer-muted flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                Rank Progress
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">{currentRank.icon}</span>
              <Progress 
                value={((progress.totalPoints - currentRank.minPoints) / (nextRank.minPoints - currentRank.minPoints)) * 100} 
                className="flex-1 h-2" 
              />
              <span className="text-sm">{nextRank.icon}</span>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};
