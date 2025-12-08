import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Snowflake {
  id: number;
  left: number;
  animationDuration: number;
  animationDelay: number;
  size: number;
  emoji: string;
  opacity: number;
}

export const FallingSnow = () => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    const snowEmojis = ['❄️', '❅', '❆', '✻', '❋', '🎄', '⭐', '🎁', '✨', '🌟'];
    const newSnowflakes: Snowflake[] = Array.from({ length: 35 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 8 + Math.random() * 12,
      animationDelay: Math.random() * 10,
      size: 12 + Math.random() * 24,
      emoji: snowEmojis[Math.floor(Math.random() * snowEmojis.length)],
      opacity: 0.5 + Math.random() * 0.5,
    }));
    setSnowflakes(newSnowflakes);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {snowflakes.map((flake) => (
        <motion.div
          key={flake.id}
          className="absolute"
          style={{
            left: `${flake.left}%`,
            fontSize: `${flake.size}px`,
            opacity: flake.opacity,
            top: '-50px',
          }}
          animate={{
            y: ['0vh', '105vh'],
            x: [0, Math.random() * 60 - 30],
            rotate: [0, 360 * (Math.random() > 0.5 ? 1 : -1)],
          }}
          transition={{
            duration: flake.animationDuration,
            delay: flake.animationDelay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {flake.emoji}
        </motion.div>
      ))}
      
      {/* Twinkling stars effect */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute"
          style={{
            left: `${5 + Math.random() * 90}%`,
            top: `${3 + Math.random() * 35}%`,
            fontSize: '10px',
            color: i % 2 === 0 ? 'hsl(45, 85%, 50%)' : 'hsl(352, 95%, 70%)',
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.7, 1.3, 0.7],
          }}
          transition={{
            duration: 1.5 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        >
          ✦
        </motion.div>
      ))}

      {/* Floating ornaments */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`ornament-${i}`}
          className="absolute text-2xl"
          style={{
            left: `${10 + i * 15}%`,
            top: `${5 + Math.random() * 20}%`,
          }}
          animate={{
            y: [-5, 5, -5],
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        >
          {['🔴', '🟢', '🔵', '🟡', '⚪', '🟣'][i]}
        </motion.div>
      ))}
    </div>
  );
};

export default FallingSnow;
