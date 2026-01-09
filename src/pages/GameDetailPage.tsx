import { useParams, useNavigate } from 'react-router-dom';
import { games } from '@/data/games';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Share2, ArrowLeft } from 'lucide-react';
import { useUserPrefs } from '@/contexts/UserPrefsContext';
import { useAuth } from '@/contexts/AuthContext';
import { hash, asset, canonical } from '@/lib/paths';
import { thumb } from '@/lib/thumb';
import { SEO } from '@/components/SEO';
import { similarItems } from '@/utils/similarity';
import { openGameSandbox } from '@/utils/openGameSandbox';
import { SidebarAd, BottomAd } from '@/components/GoogleAd';

export default function GameDetailPage() {
  const { id } = useParams(); // id === slug/id in games.ts
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { prefs, toggleFavorite, pushHistory } = useUserPrefs();
  const game = games.find(g => g.id === id);
  if (!game) return <div className="p-8 text-center">Game not found</div>;

  const fav = prefs.favorites.includes(game.id);
  const play = () => {
    pushHistory(game.id, 'game');
    openGameSandbox(game.url);
  };
  const share = async () => {
    const url = canonical(`/games/${game.id}`);
    if (navigator.share) { await navigator.share({ title: game.title, url }); }
    else { await navigator.clipboard.writeText(url); alert('Link copied'); }
  };

  const similar = similarItems(games, game, 6);

  // Dark theme for authenticated users
  const isDarkTheme = isAuthenticated;
  const themeClasses = isDarkTheme 
    ? "bg-[#121217] text-white min-h-screen" 
    : "bg-slate-50 text-slate-900 min-h-screen";

  return (
    <div className={themeClasses}>
      <SEO 
        title={`${game.title} — Tech Tips`} 
        description={`${game.title} - Play this ${game.tags.join(", ")} game for free!`} 
        canonical={canonical(`/games/${game.id}`)} 
        ogImage={game.thumbnail}
        gameData={{
          name: game.title,
          genre: game.tags || [],
          url: canonical(`/games/${game.id}`),
          image: game.thumbnail
        }}
      />
      
      {/* Back Button */}
      <div className="sticky top-0 z-40 bg-[#121217]/90 backdrop-blur-md border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <Button variant="ghost" onClick={() => navigate(-1)} className="text-white hover:bg-white/10">
            <ArrowLeft className="h-4 w-4 mr-2" />Back
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-3 gap-6">
          
          {/* Main Game Card */}
          <Card className={`lg:col-span-2 ${isDarkTheme ? "bg-[#1E1E24] border-[#2a2a3a]" : "bg-white border-slate-200"}`}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className={isDarkTheme ? "text-white" : "text-slate-900"}>{game.title}</span>
                <button 
                  onClick={() => toggleFavorite(game.id)} 
                  aria-label="favorite"
                  className={isDarkTheme ? "text-white hover:text-red-400" : "text-slate-600 hover:text-red-500"}
                >
                  <Heart className={`h-5 w-5 ${fav ? "fill-current text-red-500" : ""}`} />
                </button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <img 
                  src={game.thumbnail} 
                  alt={game.title} 
                  className="rounded-lg mb-4 max-h-64 object-cover w-full" 
                />
                <p className={isDarkTheme ? "text-slate-300 mb-4" : "text-slate-600 mb-4"}>
                  Play {game.title} - A {game.tags.join(", ")} game. Test your skills and have fun!
                </p>
                <div className="flex gap-2">
                  <Button 
                    onClick={play}
                    className={`font-semibold ${isDarkTheme ? "bg-orange-600 hover:bg-orange-700 text-white shadow-lg" : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg"}`}
                  >
                    Play Now
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={share}
                    className={`font-semibold border-2 ${isDarkTheme ? "border-slate-500 bg-slate-800 text-white hover:bg-slate-700 hover:text-white" : "border-slate-400 bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900"}`}
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    <span className={`font-medium ${isDarkTheme ? "text-white" : "text-slate-900"}`}>Share</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Similar Games Sidebar */}
          <div className="space-y-6">
            <Card className={isDarkTheme ? "bg-[#1E1E24] border-[#2a2a3a]" : "bg-white border-slate-200"}>
              <CardHeader>
                <CardTitle className={isDarkTheme ? "text-white" : "text-slate-900"}>
                  Similar Games
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {similar.map(s => (
                  <button 
                    key={s.id} 
                    onClick={() => navigate(`/games/${s.id}`)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      isDarkTheme 
                        ? "hover:bg-white/10 text-slate-300" 
                        : "hover:bg-slate-50 text-slate-600"
                    }`}
                  >
                    <div className="font-medium">{s.title}</div>
                    <div className="text-sm opacity-70">{s.tags?.slice(0, 3).join(" • ")}</div>
                  </button>
                ))}
              </CardContent>
            </Card>
            
            <SidebarAd />
          </div>
        </div>
      </div>
      
      <BottomAd />
    </div>
  );
}
