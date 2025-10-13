import React, { useEffect, useRef } from "react";

type Props = {
  variant?: "floating" | "inline";
  visible?: boolean;
};

declare global {
  interface Window {
    sfc_load_counter?: () => void;
  }
}

export const VisitorCounter: React.FC<Props> = ({ variant = "floating", visible = true }) => {
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // The scripts are loaded in index.html, just need to trigger the counter
    if (window.sfc_load_counter && counterRef.current) {
      counterRef.current.innerHTML = '';
      window.sfc_load_counter();
    }
  }, []);

  if (!visible) {
    return null;
  }

  if (variant === "floating") {
    return (
      <div className="fixed bottom-4 right-4 z-[9999] rounded-md border border-gamer-border
                     bg-gamer-card/90 px-3 py-2 text-xs text-gamer-text shadow-lg">
        <div className="text-center">
          <div ref={counterRef} id="sfcxkflcxztqpzjcexu2jw9j1ee8ugypwn6" className="font-mono text-sm"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center text-sm">
      <div ref={counterRef} id="sfcxkflcxztqpzjcexu2jw9j1ee8ugypwn6"></div>
    </div>
  );
};
