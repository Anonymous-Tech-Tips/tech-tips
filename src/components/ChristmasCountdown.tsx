import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const ChristmasCountdown = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isChristmas, setIsChristmas] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      let christmas = new Date(currentYear, 11, 25); // Dec 25

      // If Christmas has passed this year, target next year
      if (now > christmas) {
        christmas = new Date(currentYear + 1, 11, 25);
      }

      const difference = christmas.getTime() - now.getTime();

      if (difference <= 0) {
        setIsChristmas(true);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (isChristmas) {
    return (
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-gradient-to-r from-christmas-red to-christmas-green rounded-2xl p-6 text-center shadow-xl"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
          className="text-4xl mb-2"
        >
          🎄🎅🎁
        </motion.div>
        <h3 className="text-2xl font-bold text-white">Merry Christmas!</h3>
      </motion.div>
    );
  }

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex flex-col items-center"
    >
      <div className="bg-christmas-cream/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg border-2 border-christmas-green/30 min-w-[70px]">
        <motion.span
          key={value}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-3xl md:text-4xl font-bold text-christmas-red"
        >
          {value.toString().padStart(2, '0')}
        </motion.span>
      </div>
      <span className="text-xs md:text-sm font-medium text-christmas-green mt-2 uppercase tracking-wider">
        {label}
      </span>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-christmas-red/10 via-christmas-cream to-christmas-green/10 rounded-2xl p-6 shadow-xl border border-christmas-green/20"
    >
      <div className="text-center mb-4">
        <motion.span
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-block text-3xl"
        >
          🎄
        </motion.span>
        <h3 className="text-lg md:text-xl font-bold text-christmas-green inline-block mx-3">
          Countdown to Christmas
        </h3>
        <motion.span
          animate={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-block text-3xl"
        >
          🎄
        </motion.span>
      </div>
      
      <div className="flex justify-center gap-3 md:gap-6">
        <TimeUnit value={timeLeft.days} label="Days" />
        <div className="text-christmas-red text-3xl font-bold self-start mt-3">:</div>
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <div className="text-christmas-red text-3xl font-bold self-start mt-3">:</div>
        <TimeUnit value={timeLeft.minutes} label="Mins" />
        <div className="text-christmas-red text-3xl font-bold self-start mt-3">:</div>
        <TimeUnit value={timeLeft.seconds} label="Secs" />
      </div>

      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-center mt-4 text-christmas-darkGreen text-sm"
      >
        ✨ The magic is coming! ✨
      </motion.div>
    </motion.div>
  );
};

export default ChristmasCountdown;
