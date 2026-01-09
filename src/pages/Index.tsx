import React, { useState, useEffect } from "react";
import { 
  BookOpen, Calculator, Clock, Search, GraduationCap, 
  Atom, Globe, Code, PenTool, Database, 
  Microscope, ChevronRight, PlayCircle, Quote, Check, Copy
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { GamerHome } from "@/components/GamerHome";
import { toast } from "sonner";

// --- 🏫 PUBLIC ACADEMIC PAGE ---

const AcademicHome = () => {
  // --- INTERACTIVE TOOL STATES ---
  
  // 1. Pomodoro Timer
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      toast.success("Focus session complete!");
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // 2. GPA Calculator
  const [grades, setGrades] = useState([{ grade: '', weight: '' }]);
  const [gpa, setGpa] = useState<number | null>(null);

  const calculateGPA = () => {
    let totalPoints = 0;
    let totalWeights = 0;
    grades.forEach(g => {
      const w = parseFloat(g.weight) || 1; // Default weight 1.0
      const score = parseFloat(g.grade);
      if (!isNaN(score)) {
        // Simple conversion: 90-100=4, 80-89=3, etc. (Simplified)
        let points = 0;
        if (score >= 90) points = 4;
        else if (score >= 80) points = 3;
        else if (score >= 70) points = 2;
        else if (score >= 60) points = 1;
        
        totalPoints += points * w;
        totalWeights += w;
      }
    });
    const result = totalWeights > 0 ? totalPoints / totalWeights : 0;
    setGpa(result);
    toast.success(`GPA Calculated: ${result.toFixed(2)}`);
  };

  // 3. Citation Generator
  const [citeUrl, setCiteUrl] = useState("");
  const [citeStyle, setCiteStyle] = useState("MLA 9");

  const handleCitation = () => {
    if (!citeUrl) return toast.error("Please enter a URL first");
    
    const date = new Date().toLocaleDateString();
    let citation = "";
    
    if (citeStyle === "MLA 9") {
      citation = `Unknown Author. "Web Page Title." Website Name, Publisher, ${date}, ${citeUrl}.`;
    } else if (citeStyle === "APA 7") {
      citation = `Author, A. A. (Year, Month Date). Title of page. Site Name. ${citeUrl}`;
    } else {
      citation = `"${citeUrl}". Accessed ${date}.`;
    }

    navigator.clipboard.writeText(citation);
    toast.success("Citation copied to clipboard!", {
      icon: <Check className="h-4 w-4 text-green-500" />
    });
  };

  const scrollToResources = () => {
    document.getElementById('resources')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-teal-100">
      
      {/* --- HERO SECTION --- */}
      <section className="bg-white border-b border-slate-200 pt-20 pb-16 px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-sm font-semibold border border-teal-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              Academic Portal v2.4 Live
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900">
              Accelerate Your <br/>
              <span className="text-teal-700">Learning Potential</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
              Access essential tools, curated research databases, and study optimization resources. 
              Designed for the modern scholar.
            </p>
            <div className="flex gap-4 pt-2">
              <Button 
                onClick={scrollToResources}
                size="lg" 
                className="bg-teal-700 hover:bg-teal-800 text-white rounded-md px-8 h-12 text-base shadow-sm"
              >
                Explore Resources
              </Button>
              <Link to="/login">
                <Button variant="outline" size="lg" className="border-slate-300 text-slate-700 h-12 hover:bg-slate-50">
                  Student Portal Login
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* --- INTERACTIVE TOOLS WIDGET --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden"
          >
            <div className="bg-slate-100 px-6 py-3 border-b border-slate-200 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                <div className="w-3 h-3 rounded-full bg-slate-300"></div>
              </div>
              <span className="text-xs font-medium text-slate-500 ml-2">Quick Tools</span>
            </div>
            
            <Tabs defaultValue="timer" className="w-full">
              <TabsList className="w-full grid grid-cols-3 bg-slate-50 p-1 border-b border-slate-200">
                <TabsTrigger value="timer" className="data-[state=active]:bg-white data-[state=active]:shadow-sm text-xs md:text-sm">Focus Timer</TabsTrigger>
                <TabsTrigger value="calc" className="data-[state=active]:bg-white data-[state=active]:shadow-sm text-xs md:text-sm">Grade Calc</TabsTrigger>
                <TabsTrigger value="cite" className="data-[state=active]:bg-white data-[state=active]:shadow-sm text-xs md:text-sm">Citation</TabsTrigger>
              </TabsList>
              
              {/* POMODORO */}
              <TabsContent value="timer" className="p-8 text-center space-y-6">
                <div className="text-6xl font-mono font-bold text-slate-800 tracking-wider">
                  {formatTime(timeLeft)}
                </div>
                <div className="flex justify-center gap-4">
                  <Button 
                    onClick={() => setIsActive(!isActive)}
                    className={isActive ? "bg-amber-600 hover:bg-amber-700 text-white" : "bg-teal-600 hover:bg-teal-700 text-white"}
                  >
                    {isActive ? "Pause Session" : "Start Focus"}
                  </Button>
                  <Button variant="outline" onClick={() => { setIsActive(false); setTimeLeft(25 * 60); }}>
                    Reset
                  </Button>
                </div>
                <p className="text-xs text-slate-400">Standard Pomodoro: 25m Focus / 5m Break</p>
              </TabsContent>

              {/* GRADE CALC */}
              <TabsContent value="calc" className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex gap-2 text-sm text-slate-500 font-medium">
                    <span className="flex-1">Grade (0-100)</span>
                    <span className="w-20">Weight</span>
                  </div>
                  {grades.map((g, i) => (
                    <div key={i} className="flex gap-2">
                      <Input 
                        placeholder="95" 
                        value={g.grade}
                        type="number"
                        onChange={(e) => {
                          const newGrades = [...grades];
                          newGrades[i].grade = e.target.value;
                          setGrades(newGrades);
                        }}
                      />
                      <Input 
                        placeholder="1.0" 
                        className="w-20" 
                        value={g.weight}
                        type="number"
                        onChange={(e) => {
                          const newGrades = [...grades];
                          newGrades[i].weight = e.target.value;
                          setGrades(newGrades);
                        }}
                      />
                    </div>
                  ))}
                  <Button variant="link" onClick={() => setGrades([...grades, { grade: '', weight: '' }])} className="text-teal-600 h-auto p-0 text-xs">
                    + Add Course
                  </Button>
                </div>
                <div className="flex justify-between items-center bg-slate-100 p-3 rounded-lg border border-slate-200">
                  <Button onClick={calculateGPA} size="sm" className="bg-slate-800 hover:bg-slate-900 text-white">Calculate</Button>
                  <div className="text-right">
                    <span className="text-xs text-slate-500 block uppercase tracking-wide">Weighted GPA (4.0)</span>
                    <span className="text-xl font-bold text-teal-700">{gpa !== null ? gpa.toFixed(2) : '--'}</span>
                  </div>
                </div>
              </TabsContent>

              {/* CITATION */}
              <TabsContent value="cite" className="p-6 space-y-4">
                <div className="space-y-3">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-500">Source URL</label>
                    <Input 
                      placeholder="https://www.example.com/article" 
                      value={citeUrl}
                      onChange={(e) => setCiteUrl(e.target.value)}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-500">Style</label>
                    <div className="flex gap-2">
                      {["MLA 9", "APA 7", "Chicago"].map((style) => (
                        <Button 
                          key={style}
                          onClick={() => setCiteStyle(style)}
                          variant="outline" 
                          size="sm" 
                          className={`flex-1 ${citeStyle === style ? "bg-teal-50 border-teal-200 text-teal-700" : ""}`}
                        >
                          {style}
                        </Button>
                      ))}
                    </div>
                  </div>
                  <Button 
                    onClick={handleCitation}
                    className="w-full bg-slate-800 hover:bg-slate-900 text-white mt-2"
                  >
                    <Copy className="w-4 h-4 mr-2" /> Generate & Copy
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* --- CURATED RESOURCES GRID --- */}
      <main id="resources" className="max-w-7xl mx-auto px-6 py-16 scroll-mt-20">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Curated Learning Directory</h2>
            <p className="text-slate-500">Verified resources for research and development.</p>
          </div>
          <div className="relative hidden md:block w-64">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <Input placeholder="Search resources..." className="pl-9 bg-white" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* STEM CARD */}
          <ResourceCard 
            icon={Atom} 
            title="Science & Math" 
            color="text-blue-600"
            bg="bg-blue-50"
            links={[
              { label: "WolframAlpha", url: "https://www.wolframalpha.com" },
              { label: "Desmos Graphing", url: "https://www.desmos.com/calculator" },
              { label: "PhET Simulations", url: "https://phet.colorado.edu/" },
              { label: "The Feynman Lectures", url: "https://www.feynmanlectures.caltech.edu/" },
              { label: "Khan Academy", url: "https://www.khanacademy.org/" },
            ]}
          />

          {/* CODING CARD */}
          <ResourceCard 
            icon={Code} 
            title="Computer Science" 
            color="text-emerald-600"
            bg="bg-emerald-50"
            links={[
              { label: "CS50 Harvard", url: "https://cs50.harvard.edu/x/" },
              { label: "The Odin Project", url: "https://www.theodinproject.com/" },
              { label: "MDN Web Docs", url: "https://developer.mozilla.org/" },
              { label: "Replit IDE", url: "https://replit.com/" },
              { label: "LeetCode", url: "https://leetcode.com/" },
            ]}
          />

          {/* HUMANITIES CARD */}
          <ResourceCard 
            icon={Globe} 
            title="Humanities & Lang" 
            color="text-amber-600"
            bg="bg-amber-50"
            links={[
              { label: "Duolingo Schools", url: "https://schools.duolingo.com/" },
              { label: "Project Gutenberg", url: "https://www.gutenberg.org/" },
              { label: "Stanford Philosophy", url: "https://plato.stanford.edu/" },
              { label: "National Archives", url: "https://www.archives.gov/" },
              { label: "Google Arts & Culture", url: "https://artsandculture.google.com/" },
            ]}
          />

          {/* RESEARCH CARD */}
          <ResourceCard 
            icon={Database} 
            title="Academic Research" 
            color="text-purple-600"
            bg="bg-purple-50"
            links={[
              { label: "Google Scholar", url: "https://scholar.google.com/" },
              { label: "JSTOR", url: "https://www.jstor.org/" },
              { label: "Purdue OWL", url: "https://owl.purdue.edu/" },
              { label: "Zotero Bib", url: "https://zbib.org/" },
              { label: "ResearchRabbit", url: "https://www.researchrabbit.ai/" },
            ]}
          />

          {/* PRODUCTIVITY CARD */}
          <ResourceCard 
            icon={PenTool} 
            title="Student Utilities" 
            color="text-slate-600"
            bg="bg-slate-100"
            links={[
              { label: "Notion for Students", url: "https://www.notion.so/product/notion-for-education" },
              { label: "Anki Flashcards", url: "https://apps.ankiweb.net/" },
              { label: "Obsidian Notes", url: "https://obsidian.md/" },
              { label: "Excalidraw", url: "https://excalidraw.com/" },
              { label: "Pomofocus", url: "https://pomofocus.io/" },
            ]}
          />

          {/* DOCUMENTARIES CARD */}
          <ResourceCard 
            icon={PlayCircle} 
            title="Visual Learning" 
            color="text-rose-600"
            bg="bg-rose-50"
            links={[
              { label: "PBS Nova", url: "https://www.pbs.org/wgbh/nova/" },
              { label: "Nat Geo Education", url: "https://www.nationalgeographic.org/society/education-resources/" },
              { label: "TED-Ed", url: "https://ed.ted.com/" },
              { label: "Kurzgesagt", url: "https://kurzgesagt.org/" },
              { label: "Smithsonian Channel", url: "https://www.smithsonianchannel.com/" },
            ]}
          />
        </div>
      </main>

      {/* --- DAILY INSIGHT SECTION --- */}
      <section className="bg-teal-900 text-teal-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Quote className="h-12 w-12 mx-auto text-teal-400 opacity-50" />
          <blockquote className="text-2xl md:text-3xl font-serif italic leading-relaxed">
            "Education is not the learning of facts, but the training of the mind to think."
          </blockquote>
          <cite className="block text-teal-300 font-semibold not-italic">— Albert Einstein</cite>
          
          <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t border-teal-800 mt-8">
            <div>
              <div className="text-3xl font-bold text-white">45+</div>
              <div className="text-sm text-teal-300">Verified Tools</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-sm text-teal-300">Uptime Access</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-sm text-teal-300">Free Resources</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">Safe</div>
              <div className="text-sm text-teal-300">Distraction Free</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// --- HELPER COMPONENT ---
const ResourceCard = ({ icon: Icon, title, links, color, bg }: any) => (
  <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow h-full">
    <CardHeader className="pb-3">
      <div className={`w-10 h-10 rounded-lg ${bg} flex items-center justify-center mb-2`}>
        <Icon className={`h-5 w-5 ${color}`} />
      </div>
      <CardTitle className="text-lg font-bold text-slate-800">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2">
        {links.map((link: any, i: number) => (
          <li key={i}>
            <a 
              href={link.url} 
              target="_blank" 
              rel="noreferrer noopener"
              className="group flex items-center justify-between text-sm text-slate-500 hover:text-teal-700 hover:bg-teal-50 p-2 rounded-md transition-colors cursor-pointer"
            >
              <span>{link.label}</span>
              <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

// --- MAIN WRAPPER ---
const Index = () => {
  const { isAuthenticated } = useAuth();
  
  if (isAuthenticated) {
    return <GamerHome />;
  }

  return <AcademicHome />;
};

export default Index;
