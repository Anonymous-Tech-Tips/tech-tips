import React from "react";
import heroBanner from "@/assets/thanksgiving-banner.jpg";

export const HeroBanner: React.FC = () => {
  return (
    <section id="home" className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
      <img
        src={heroBanner}
        alt="Cozy Thanksgiving scene with warm autumn colors"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-gamer-bg/60 via-gamer-bg/30 to-gamer-bg/80" />

      <div className="relative h-full flex items-center justify-center">
        <div className="relative">
          <h1 className="font-rowdies font-bold text-gamer-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center px-4 animate-in fade-in slide-in-from-bottom-4 duration-700 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] [text-shadow:_2px_2px_8px_rgb(0_0_0_/_80%),_-1px_-1px_4px_rgb(0_0_0_/_60%)]">
            Tech Tips
          </h1>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gamer-accent/10 blur-xl -z-10" />
        </div>
      </div>
    </section>
  );
};
