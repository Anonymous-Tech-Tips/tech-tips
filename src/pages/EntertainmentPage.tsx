import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Search, Flame, Tv, Play, ChevronRight, 
  Film, Trophy, Zap, Clapperboard, Monitor,
  Gamepad, Crown, Popcorn
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUserPrefs } from "@/contexts/UserPrefsContext";
import { DailyReward } from "@/components/DailyReward";
import { TopBannerAd, BottomAd, InContentAd } from "@/components/GoogleAd";
import { openSmart } from "@/utils/openGameSandbox";
import { decryptLink } from "@/utils/crypto";

// 🎬 DATA CONFIGURATION
// I have mapped your provided list to our UI structure

const animeList = [
  { title: "HiAnime", encodedUrl: "aHR0cHM6Ly9oaWFuaW1lLnRvLw==", cloaked: false, desc: "Sub / Dub / Auto-Next", icon: Zap, color: "from-orange-500 to-red-600", thumb: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1000&auto=format&fit=crop" },
  { title: "AnimeKai", encodedUrl: "aHR0cHM6Ly9hbmltZWthaS50by8=", cloaked: false, desc: "Hard Subs / Dub", icon: Clapperboard, color: "from-purple-500 to-indigo-600", thumb: "https://images.unsplash.com/photo-1541562232579-512a21360020?q=80&w=1000&auto=format&fit=crop" },
  { title: "Miruro", encodedUrl: "aHR0cHM6Ly9taXJ1cm8udHYv", cloaked: false, desc: "Clean UI / No Ads", icon: Crown, color: "from-green-500 to-emerald-700", thumb: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?q=80&w=1000&auto=format&fit=crop" },
  { title: "Miruro (Mirror)", encodedUrl: "aHR0cHM6Ly93d3cubWlydXJvLmNvbS8=", cloaked: false, desc: "Alternative Link", icon: Crown, color: "from-green-500 to-emerald-700", thumb: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?q=80&w=1000&auto=format&fit=crop" },
];

const movieList = [
  { title: "Cineby", encodedUrl: "aHR0cHM6Ly9jaW5lYnkuYXBwLw==", cloaked: false, desc: "Movies / TV / Anime", icon: Film, color: "from-blue-600 to-blue-900", thumb: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1000&auto=format&fit=crop" },
  { title: "Rive", encodedUrl: "aHR0cHM6Ly9yZnJzaC5yaXZlLmFwcC8=", cloaked: false, desc: "Premium Streaming", icon: Play, color: "from-rose-500 to-rose-800", thumb: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1000&auto=format&fit=crop" },
  { title: "Flixer", encodedUrl: "aHR0cHM6Ly9mbGl4ZXIudmlwLw==", cloaked: false, desc: "Auto-Next Feature", icon: Popcorn, color: "from-yellow-500 to-orange-700", thumb: "https://images.unsplash.com/photo-1517604931442-710c8ed05254?q=80&w=1000&auto=format&fit=crop" },
  { title: "VeloraTV", encodedUrl: "aHR0cHM6Ly92ZWxvcmF0di5zdS8=", cloaked: false, desc: "High Quality Streams", icon: Tv, color: "from-purple-600 to-purple-900", thumb: "https://images.unsplash.com/photo-1593784697956-14185ac9489f?q=80&w=1000&auto=format&fit=crop" },
  { title: "Aether", encodedUrl: "aHR0cHM6Ly9hZXRoZXIubW9tLw==", cloaked: false, desc: "Modern UI", icon: Crown, color: "from-indigo-500 to-blue-800", thumb: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=1000&auto=format&fit=crop" },
  // Mirrors
  { title: "Rive (KDrama)", encodedUrl: "aHR0cHM6Ly9yaXZlc3RyZWFtLm9yZy9rZHJhbWE=", cloaked: false, desc: "Asian Drama Focus", icon: Play, color: "from-rose-500 to-rose-800", thumb: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1000&auto=format&fit=crop" },
  { title: "Flixer (Mirror)", encodedUrl: "aHR0cHM6Ly9mbGl4ZXIuc2gv", cloaked: false, desc: "Backup Link", icon: Popcorn, color: "from-yellow-500 to-orange-700", thumb: "https://images.unsplash.com/photo-1517604931442-710c8ed05254?q=80&w=1000&auto=format&fit=crop" },
  { title: "VeloraTV (RU)", encodedUrl: "aHR0cHM6Ly92ZWxvcmF0di5ydS8=", cloaked: false, desc: "Backup Link", icon: Tv, color: "from-purple-600 to-purple-900", thumb: "https://images.unsplash.com/photo-1593784697956-14185ac9489f?q=80&w=1000&auto=format&fit=crop" },
];

const sportsList = [
  { title: "StreamEast", encodedUrl: "aHR0cHM6Ly9zdHJlYW1lYXN0LmFwcC8=", cloaked: false, desc: "The GOAT of Sports", icon: Trophy, color: "from-green-600 to-green-900", thumb: "https://images.unsplash.com/photo-1522770179533-24471fcdba45?q=80&w=1000&auto=format&fit=crop" },
  { title: "MethStreams", encodedUrl: "aHR0cHM6Ly9jcmFja3N0cmVhbXMuYml6Lw==", cloaked: false, desc: "MMA / Boxing / NFL", icon: Flame, color: "from-red-600 to-red-900", thumb: "https://images.unsplash.com/photo-1599586120429-48285b6a8a81?q=80&w=1000&auto=format&fit=crop" },
  { title: "Streamed.su", encodedUrl: "aHR0cHM6Ly9zdHJlYW1lZC5zdS8=", cloaked: false, desc: "Clean Sports Aggregator", icon: Monitor, color: "from-blue-500 to-blue-800", thumb: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1000&auto=format&fit=crop" },
  { title: "DaddyLive", encodedUrl: "aHR0cHM6Ly9kYWRkeWxpdmUubXAv", cloaked: false, desc: "24/7 Live TV Channels", icon: Tv, color: "from-orange-500 to-orange-800", thumb: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1000&auto=format&fit=crop" },
  { title: "Sportsurge", encodedUrl: "aHR0cHM6Ly92Mi5zcG9ydHN1cmdlLm5ldC8=", cloaked: false, desc: "Link Aggregator", icon: Zap, color: "from-slate-600 to-slate-900", thumb: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1000&auto=format&fit=crop" },
  { title: "NFLBite", encodedUrl: "aHR0cHM6Ly9uZmxiaXRlLmNvbS8=", cloaked: false, desc: "American Football", icon: Gamepad, color: "from-blue-800 to-blue-950", thumb: "https://images.unsplash.com/photo-1611000271746-59914442df7f?q=80&w=1000&auto=format&fit=crop" },
  { title: "NBAMonster", encodedUrl: "aHR0cHM6Ly9uYmFtb25zdGVyLnh5ei8=", cloaked: false, desc: "Basketball Streams", icon: Trophy, color: "from-orange-600 to-orange-900", thumb: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=1000&auto=format&fit=crop" },
  { title: "SportyHunter", encodedUrl: "aHR0cHM6Ly9zcG9ydHlodW50ZXIuY29tLw==", cloaked: false, desc: "Live Schedule", icon: Search, color: "from-emerald-600 to-emerald-900", thumb: "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?q=80&w=1000&auto=format&fit=crop" },
];

export const EntertainmentPage = () => {
  const { prefs } = useUserPrefs();
  const [searchQuery, setSearchQuery] = useState("");

  const allStreams = [...animeList, ...movieList, ...sportsList];
  
  const filteredStreams = searchQuery 
    ? allStreams.filter(s => s.title.toLowerCase().includes(searchQuery.toLowerCase()) || s.desc.toLowerCase().includes(searchQuery.toLowerCase()))
    : null; // null means show grouped lists

  // Featured Hero Item (HiAnime)
  const featured = animeList[0];

  return (
    <div className="min-h-screen pb-24 bg-[#121217] text-white overflow-x-hidden">
      
      {/* 1. TOP BAR (Dashboard Style) */}
      <div className="sticky top-0 z-40 bg-[#121217]/90 backdrop-blur-md border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Search Bar */}
          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-purple-500 transition-colors" size={18} />
            <Input 
              placeholder="Search streams..." 
              className="bg-[#1E1E24] border-white/10 pl-10 text-white placeholder:text-slate-500 focus:border-purple-500/50 rounded-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Gamification Stats */}
          <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
             <div className="flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 px-4 py-2 rounded-full border border-purple-500/20">
              <Flame className="text-purple-500 fill-purple-500 animate-pulse" size={18} />
              <span className="font-bold text-purple-400">{prefs.settings.streakCount || 0} Streak</span>
            </div>
            <DailyReward streakCount={prefs.settings.streakCount || 0} />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* 2. FEATURED HERO (Only show if not searching) */}
        {!searchQuery && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative rounded-3xl overflow-hidden aspect-[21/9] md:aspect-[24/9] mb-12 group cursor-pointer border border-white/5 hover:border-orange-500/50 transition-colors"
            onClick={() => openSmart(decryptLink(featured.encryptedUrl), !featured.cloaked)}
          >
            {/* Background */}
            <div className="absolute inset-0">
              <img 
                src={featured.thumb} 
                alt="Featured" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121217] via-[#121217]/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#121217] via-[#121217]/60 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4 shadow-[0_0_15px_rgba(249,115,22,0.5)]">
                  FEATURED ANIME HUB
                </div>
                <h1 className="text-4xl md:text-6xl font-rowdies text-white mb-2 leading-tight">
                  {featured.title}
                </h1>
                <p className="text-xl text-slate-300 font-light mb-4">{featured.desc}</p>
                <Button 
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-xl text-lg font-bold shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] transition-all"
                >
                  <Play className="fill-white mr-2" size={20} /> Watch Now
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* 3. ADS */}
        <div className="mb-12">
          <TopBannerAd />
        </div>

        {/* 4. CONTENT GRIDS */}
        
        {/* If Searching, show one flat grid */}
        {searchQuery ? (
           <SectionGrid title={`Results for "${searchQuery}"`} items={filteredStreams || []} icon={Search} />
        ) : (
           <>
              {/* Anime Section */}
              <SectionGrid title="Anime Hub" items={animeList} icon={Zap} delay={0.1} />
              
              <div className="my-12">
                <InContentAd />
              </div>

              {/* Movies Section */}
              <SectionGrid title="Movies & TV Shows" items={movieList} icon={Clapperboard} delay={0.2} />
              
              <div className="my-12">
                 <InContentAd />
              </div>

              {/* Sports Section */}
              <SectionGrid title="Live Sports" items={sportsList} icon={Trophy} delay={0.3} />
           </>
        )}

        {/* 5. DISCLAIMER */}
        <div className="mt-16 mb-8 p-6 bg-white/5 rounded-xl border border-white/10 text-center">
            <p className="text-xs text-slate-500">
                TechTips does not host any content. All links point to external third-party services. 
                Users are responsible for their own media consumption in accordance with school policies.
            </p>
        </div>

      </div>
      <BottomAd />
    </div>
  );
};

// --- REUSABLE GRID COMPONENT ---
const SectionGrid = ({ title, items, icon: Icon, delay = 0 }: any) => (
  <section className="mb-12">
    <div className="flex items-center justify-between mb-6 px-2">
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <Icon className="text-purple-400" /> {title}
      </h2>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {items.map((stream: any, idx: number) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + (idx * 0.05) }}
        >
          <div
            onClick={() => openSmart(decryptLink(stream.encryptedUrl), !stream.cloaked)}
            className="group relative bg-[#1E1E24] rounded-2xl overflow-hidden border border-white/5 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] hover:-translate-y-1 cursor-pointer h-full flex flex-col"
          >
            {/* Banner */}
            <div className={`h-24 bg-gradient-to-r ${stream.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10" />
                <stream.icon className="absolute -bottom-4 -right-4 text-white/10 -rotate-12 transform scale-[2.5]" size={64} />
            </div>

            {/* Icon Badge */}
            <div className="px-6 -mt-8 relative z-10 flex justify-between items-end">
                <div className="w-16 h-16 rounded-xl bg-[#1E1E24] p-1 shadow-2xl">
                  <img 
                    src={stream.thumb} 
                    alt="icon" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="mb-1">
                  <ChevronRight className="text-slate-600 group-hover:text-purple-400 transition-colors" />
                </div>
            </div>

            {/* Content */}
            <div className="p-6 pt-3 flex-1 flex flex-col">
              <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors mb-1">
                {stream.title}
              </h3>
              
              <p className="text-xs text-slate-400 mb-4 flex-1 line-clamp-2">
                {stream.desc}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default EntertainmentPage;
