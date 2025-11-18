import React from "react";

export const GamerHome: React.FC = () => {
  const handleEscape = () => {
    // Panic switch: open a safe site in same tab
    window.location.assign("https://classroom.google.com/");
  };

  return (
    <main id="top" className="bg-gamer-bg">
      {/* Intro strip */}
      <section className="max-w-6xl mx-auto px-6 pt-6">
        <p className="text-gamer-text font-rowdies text-sm sm:text-base leading-relaxed text-center">
          Welcome to <span className="underline">Tech Tips</span>!
          Your hub for <strong>Games</strong>, <strong>Utilities</strong>, and <strong>PC Optimizations</strong>!
        </p>
      </section>

      {/* Quick Actions */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex gap-6 items-center justify-center">
          {/* ESCAPE button */}
          <button
            onClick={handleEscape}
            className="px-10 py-3 rounded-md bg-[#2b2b2b] text-gamer-text font-rowdies tracking-wide
                       border border-gamer-border hover:bg-gamer-border/40 transition"
          >
            ESCAPE
          </button>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="max-w-6xl mx-auto px-6 pb-6 pt-4">
        <p className="text-center text-gamer-text/90 font-rowdies text-sm leading-6">
          By using our site, you explicitly acknowledge and consent to the fact that Tech Tips
          assumes no responsibility or liability for any potential issues that may arise as a result of
          your use of our services. This may include: getting in trouble, the site being blocked in your
          school district, or your school policy being broken. Furthermore, it is essential to understand
          that using the platform may lead to unforeseen consequences, including academic repercussions
          or disciplinary actions from your educational institution. By utilizing our services, you
          acknowledge and accept this disclaimer, assuming full responsibility for any consequences that
          may surface as a result of using Tech Tips. Please ensure that you are familiar with
          your school's policies regarding online resources.
        </p>
      </section>
    </main>
  );
};
