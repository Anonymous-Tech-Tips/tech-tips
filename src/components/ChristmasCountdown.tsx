import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';

export const ChristmasCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      let christmas = new Date(currentYear, 11, 25); // Dec 25
      
      // If Christmas has passed this year, calculate for next year
      if (now > christmas) {
        christmas = new Date(currentYear + 1, 11, 25);
      }
      
      const difference = christmas.getTime() - now.getTime();
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Card className="p-6 bg-gradient-to-br from-christmas-red/10 via-christmas-green/5 to-christmas-red/10 border-2 border-christmas-green/30 shadow-lg">
      <h3 className="text-2xl font-rowdies text-center mb-4 text-foreground flex items-center justify-center gap-2">
        🎄 Christmas Countdown 🎅
      </h3>
      <div className="grid grid-cols-4 gap-3">
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold font-rowdies text-christmas-red">{timeLeft.days}</div>
          <div className="text-xs md:text-sm text-muted-foreground font-medium">Days</div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold font-rowdies text-christmas-red">{timeLeft.hours}</div>
          <div className="text-xs md:text-sm text-muted-foreground font-medium">Hours</div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold font-rowdies text-christmas-red">{timeLeft.minutes}</div>
          <div className="text-xs md:text-sm text-muted-foreground font-medium">Minutes</div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold font-rowdies text-christmas-red">{timeLeft.seconds}</div>
          <div className="text-xs md:text-sm text-muted-foreground font-medium">Seconds</div>
        </div>
      </div>
      <p className="text-center mt-4 text-sm text-muted-foreground italic">
        The magic is coming! ✨🎁
      </p>
    </Card>
  );
};

export default ChristmasCountdown;
