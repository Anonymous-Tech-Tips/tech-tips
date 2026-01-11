import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles } from 'lucide-react';

interface LevelUpCelebrationProps {
  level: number;
  show: boolean;
  onComplete: () => void;
}

export const LevelUpCelebration: React.FC<LevelUpCelebrationProps> = ({ level, show, onComplete }) => {
  useEffect(() => {
    if (show) {
      // Fire confetti
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#FFD700', '#FFA500', '#FF6347', '#4169E1', '#9370DB'],
      });

      // Auto-dismiss after 3 seconds
      const timer = setTimeout(onComplete, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="fixed inset-0 pointer-events-none z-[200] flex items-center justify-center"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 0.5,
              repeat: 3,
              repeatType: "reverse",
            }}
            className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 rounded-full p-8 shadow-2xl"
          >
            <div className="text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="h-16 w-16 text-white mx-auto mb-4" />
              </motion.div>
              <h2 className="text-6xl font-rowdies font-bold text-white mb-2">
                LEVEL UP!
              </h2>
              <p className="text-4xl font-bold text-white">
                Level {level}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
