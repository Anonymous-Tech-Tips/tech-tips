import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
// Using emoji as fallback since the icon package doesn't have a pumpkin

export const HiddenPumpkin = () => {
  const [showPumpkin, setShowPumpkin] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Set random position
  useEffect(() => {
    const maxX = window.innerWidth - 40; // Account for pumpkin size
    const maxY = window.innerHeight - 40;
    
    setPosition({
      x: Math.random() * maxX,
      y: Math.random() * maxY
    });
  }, []);

  const handlePumpkinClick = () => {
    setShowPumpkin(!showPumpkin);
  };

  if (!showPumpkin) {
    return (
      <motion.div
        className="fixed cursor-pointer z-50"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
        onClick={handlePumpkinClick}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <span className="text-3xl opacity-30 hover:opacity-100 transition-opacity">🎃</span>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={handlePumpkinClick}
    >
      <motion.div
        initial={{ scale: 0.5, rotate: -30 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="text-center"
      >
        <span className="text-9xl mx-auto mb-4 block">🎃</span>
        <p className="text-white text-xl font-bold">Happy Thanksgiving! 🦃</p>
        <p className="text-white text-sm mt-2">Click anywhere to close</p>
      </motion.div>
    </motion.div>
  );
};

export default HiddenPumpkin;
