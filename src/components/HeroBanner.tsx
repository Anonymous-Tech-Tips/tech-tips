import React from "react";
import heroBanner from "@/assets/halloween-banner.jpg";

export const HeroBanner: React.FC = () => {
  return (
    <section id="home" className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
      <img
        src={heroBanner}
        alt="Halloween pumpkins with spooky atmosphere"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-gamer-bg/40 via-transparent to-gamer-bg/60" />

      <div className="relative h-full flex items-center justify-center">
        <h1 className="font-rowdies font-bold text-gamer-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center px-4 animate-in fade-in slide-in-from-bottom-4 duration-700 [text-shadow:_0_2px_20px_rgb(0_0_0_/_60%)]">
          Armaan's Tech Tips
        </h1>
      </div>
    </section>
  );
};
