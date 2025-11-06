import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';

export const ThanksgivingCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      
      // Thanksgiving is the 4th Thursday of November
      const november = new Date(currentYear, 10, 1); // Month is 0-indexed
      let thursdayCount = 0;
      let thanksgiving = new Date(november);
      
      while (thursdayCount < 4) {
        if (thanksgiving.getDay() === 4) { // Thursday
          thursdayCount++;
          if (thursdayCount === 4) break;
        }
        thanksgiving.setDate(thanksgiving.getDate() + 1);
      }
      
      // If Thanksgiving has passed this year, calculate for next year
      if (now > thanksgiving) {
        thanksgiving = new Date(currentYear + 1, 10, 1);
        thursdayCount = 0;
        while (thursdayCount < 4) {
          if (thanksgiving.getDay() === 4) {
            thursdayCount++;
            if (thursdayCount === 4) break;
          }
          thanksgiving.setDate(thanksgiving.getDate() + 1);
        }
      }
      
      const difference = thanksgiving.getTime() - now.getTime();
      
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
    <Card className="p-6 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 border-2 border-primary/30 shadow-lg">
      <h3 className="text-2xl font-rowdies text-center mb-4 text-foreground flex items-center justify-center gap-2">
        🦃 Thanksgiving Countdown 🍂
      </h3>
      <div className="grid grid-cols-4 gap-3">
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold font-rowdies text-primary">{timeLeft.days}</div>
          <div className="text-xs md:text-sm text-muted-foreground font-medium">Days</div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold font-rowdies text-primary">{timeLeft.hours}</div>
          <div className="text-xs md:text-sm text-muted-foreground font-medium">Hours</div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold font-rowdies text-primary">{timeLeft.minutes}</div>
          <div className="text-xs md:text-sm text-muted-foreground font-medium">Minutes</div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold font-rowdies text-primary">{timeLeft.seconds}</div>
          <div className="text-xs md:text-sm text-muted-foreground font-medium">Seconds</div>
        </div>
      </div>
      <p className="text-center mt-4 text-sm text-muted-foreground italic">
        Get ready to feast! 🍽️
      </p>
    </Card>
  );
};
