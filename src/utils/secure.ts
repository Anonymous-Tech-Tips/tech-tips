// src/utils/secure.ts

// Simple Base64 decoder to keep links off plain-text searches
export const decode = (str: string): string => {
  try {
    return atob(str);
  } catch (e) {
    console.error("Failed to decode link:", str);
    return "#";
  }
};

// HELPER: Run this in your browser console (F12) to generate codes
// btoa("https://your-secret-link.com") -> "aHR0cHM6Ly9..."
