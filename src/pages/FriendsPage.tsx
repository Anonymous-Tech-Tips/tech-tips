import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import FriendsGallery from "@/components/FriendsGallery";
import { Users } from "lucide-react";

const FriendsPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Friends | Armaan's Tech Tips"
        description="The amazing friends behind Armaan's Tech Tips"
      />
      <div className="min-h-screen bg-gamer-bg">
        <Navbar />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="w-10 h-10 text-gamer-accent" />
              <h1 className="text-4xl md:text-5xl font-rowdies font-bold text-gamer-text">
                My Friends
              </h1>
            </div>
            <p className="text-lg text-gamer-muted max-w-2xl mx-auto">
              The awesome people who make this site possible! 🎉
            </p>
          </div>

          <FriendsGallery />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default FriendsPage;
