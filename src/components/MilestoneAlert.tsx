import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, X } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface MilestoneAlertProps {
  milestone: {
    id: string;
    name: string;
    description: string;
    icon: string;
    reward: number;
  };
  show: boolean;
  onClose: () => void;
}

export const MilestoneAlert: React.FC<MilestoneAlertProps> = ({ milestone, show, onClose }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.5, rotateY: 180 }}
            animate={{ scale: 1, rotateY: 0 }}
            exit={{ scale: 0.5, rotateY: -180 }}
            transition={{ type: "spring", duration: 0.8 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Card className="bg-gradient-to-br from-amber-500 to-orange-600 border-4 border-amber-300 p-8 max-w-md relative shadow-2xl">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              <div className="text-center space-y-6">
                <motion.div
                  animate={{ 
                    scale: [1, 1.3, 1],
                    rotate: [0, 15, -15, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="text-8xl"
                >
                  {milestone.icon}
                </motion.div>

                <div>
                  <h2 className="text-3xl font-rowdies font-bold text-white mb-2 flex items-center justify-center gap-2">
                    <Trophy className="h-8 w-8" />
                    Milestone!
                  </h2>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {milestone.name}
                  </h3>
                  <p className="text-white/90 text-lg">
                    {milestone.description}
                  </p>
                  <div className="mt-4 flex items-center justify-center gap-2 text-white text-3xl font-bold">
                    <span>🪙</span>
                    <span>+{milestone.reward} Points</span>
                  </div>
                </div>

                <Button
                  onClick={onClose}
                  className="bg-white text-amber-600 hover:bg-white/90 font-bold text-lg px-8 py-6"
                >
                  Awesome!
                </Button>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
