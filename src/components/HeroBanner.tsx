import React from "react";
import { useCurrentSeason } from "./SeasonalTheme";
import thanksgivingBanner from "@/assets/thanksgiving-banner.jpg";
import christmasBanner from "@/assets/christmas-banner.jpg";
import { motion } from "framer-motion";

export const HeroBanner: React.FC = () => {
  const season = useCurrentSeason();

  const getSeasonalContent = () => {
    switch (season) {
      case 'christmas':
        return {
          title: "🎄 Tech Tips 🎄",
          subtitle: "Happy Holidays!",
          bgGradient: "from-christmas-darkRed/80 via-christmas-darkGreen/60 to-christmas-darkRed/80",
          showImage: true,
          imageSrc: christmasBanner,
          imageAlt: "Cozy Christmas scene with decorated tree and fireplace",
        };
      case 'thanksgiving':
        return {
          title: "Tech Tips",
          subtitle: null,
          bgGradient: "from-gamer-bg/60 via-gamer-bg/30 to-gamer-bg/80",
          showImage: true,
          imageSrc: thanksgivingBanner,
          imageAlt: "Cozy Thanksgiving scene with warm autumn colors",
        };
      case 'halloween':
        return {
          title: "🎃 Tech Tips 🦇",
          subtitle: "Spooky Season!",
          bgGradient: "from-orange-900/70 via-purple-900/40 to-black/80",
          showImage: false,
          imageSrc: null,
          imageAlt: "",
        };
      case 'valentines':
        return {
          title: "💕 Tech Tips 💕",
          subtitle: "Happy Valentine's!",
          bgGradient: "from-pink-900/60 via-red-900/40 to-pink-900/70",
          showImage: false,
          imageSrc: null,
          imageAlt: "",
        };
      default:
        return {
          title: "🎄 Tech Tips 🎄",
          subtitle: "Happy Holidays!",
          bgGradient: "from-christmas-darkRed/80 via-christmas-darkGreen/60 to-christmas-darkRed/80",
          showImage: true,
          imageSrc: christmasBanner,
          imageAlt: "Tech Tips banner",
        };
    }
  };

  const content = getSeasonalContent();

  return (
    <section id="home" className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
      {content.showImage && content.imageSrc ? (
        <img
          src={content.imageSrc}
          alt={content.imageAlt}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div className={`absolute inset-0 w-full h-full bg-gradient-to-br ${
          season === 'christmas' 
            ? 'from-christmas-darkRed via-christmas-darkGreen to-christmas-darkRed' 
            : season === 'halloween'
            ? 'from-orange-800 via-purple-900 to-black'
            : season === 'valentines'
            ? 'from-pink-700 via-red-800 to-pink-900'
            : 'from-christmas-darkRed via-christmas-darkGreen to-christmas-darkRed'
        }`}>
          {/* Christmas decorations */}
          {(season === 'christmas' || season === 'default') && (
            <>
              <motion.div 
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-4 left-4 text-6xl"
              >
                🎅
              </motion.div>
              <motion.div 
                animate={{ y: [0, -8, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                className="absolute top-4 right-4 text-6xl"
              >
                🎁
              </motion.div>
              <motion.div 
                animate={{ x: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute bottom-4 left-1/4 text-5xl"
              >
                🦌
              </motion.div>
              <motion.div 
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-4 right-1/4 text-5xl"
              >
                ⛄
              </motion.div>
              <motion.div 
                animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="absolute top-1/3 left-1/3 text-4xl"
              >
                🔔
              </motion.div>
              <motion.div 
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute top-1/3 right-1/3 text-4xl"
              >
                🌟
              </motion.div>
              
              {/* Christmas lights */}
              <div className="absolute top-0 left-0 right-0 flex justify-around p-2">
                {['🔴', '🟢', '🔵', '🟡', '🔴', '🟢', '🔵', '🟡', '🔴', '🟢'].map((light, i) => (
                  <motion.span 
                    key={i} 
                    className="text-2xl"
                    animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.1, 0.9] }}
                    transition={{ 
                      duration: 1, 
                      repeat: Infinity, 
                      delay: i * 0.15,
                    }}
                  >
                    {light}
                  </motion.span>
                ))}
              </div>
            </>
          )}
        </div>
      )}
      <div className={`absolute inset-0 bg-gradient-to-b ${content.bgGradient}`} />

      <div className="relative h-full flex flex-col items-center justify-center gap-2">
        <div className="relative">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-rowdies font-bold text-christmas-cream text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center px-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] [text-shadow:_2px_2px_8px_rgb(0_0_0_/_80%),_-1px_-1px_4px_rgb(0_0_0_/_60%)]"
          >
            {content.title}
          </motion.h1>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-christmas-gold/20 blur-xl -z-10" />
        </div>
        {content.subtitle && (
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-christmas-cream/90 text-xl md:text-2xl font-medium [text-shadow:_1px_1px_4px_rgb(0_0_0_/_60%)]"
          >
            {content.subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
};
