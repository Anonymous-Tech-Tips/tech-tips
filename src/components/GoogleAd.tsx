import React, { useEffect, useRef } from 'react';
import { useRewardEffects } from '@/hooks/useRewardEffects';

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

interface GoogleAdProps {
  slot?: string;
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  className?: string;
  style?: React.CSSProperties;
}

export const GoogleAd: React.FC<GoogleAdProps> = ({ 
  slot = "auto",
  format = "auto",
  className = "",
  style
}) => {
  const { hasAdFree } = useRewardEffects();
  const adRef = useRef<HTMLModElement>(null);
  const isLoaded = useRef(false);

  useEffect(() => {
    if (hasAdFree || isLoaded.current) return;
    
    try {
      if (adRef.current && !adRef.current.innerHTML.trim()) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        isLoaded.current = true;
      }
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, [hasAdFree]);

  // Don't show ads if user has ad-free experience
  if (hasAdFree) return null;

  return (
    <div className={`ad-container ${className}`} style={style}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block', ...style }}
        data-ad-client="ca-pub-8981618797106308"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
};

// Top banner - slim horizontal ad
export const TopBannerAd: React.FC = () => {
  const { hasAdFree } = useRewardEffects();
  if (hasAdFree) return null;
  
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-2">
      <GoogleAd 
        format="horizontal" 
        className="min-h-[90px]"
        style={{ minHeight: '90px' }}
      />
    </div>
  );
};

// In-content ad - for between sections
export const InContentAd: React.FC<{ className?: string }> = ({ className = "" }) => {
  const { hasAdFree } = useRewardEffects();
  if (hasAdFree) return null;
  
  return (
    <div className={`w-full max-w-3xl mx-auto px-4 py-6 ${className}`}>
      <GoogleAd 
        format="auto"
        className="min-h-[250px]"
        style={{ minHeight: '250px' }}
      />
    </div>
  );
};

// Bottom of page/article ad
export const BottomAd: React.FC = () => {
  const { hasAdFree } = useRewardEffects();
  if (hasAdFree) return null;
  
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <GoogleAd 
        format="auto"
        className="min-h-[250px]"
        style={{ minHeight: '250px' }}
      />
    </div>
  );
};

// Sidebar ad - 300x250 or similar
export const SidebarAd: React.FC = () => {
  const { hasAdFree } = useRewardEffects();
  if (hasAdFree) return null;
  
  return (
    <div className="w-full max-w-[300px] mx-auto">
      <GoogleAd 
        format="rectangle"
        className="min-h-[250px]"
        style={{ minHeight: '250px', maxWidth: '300px' }}
      />
    </div>
  );
};
