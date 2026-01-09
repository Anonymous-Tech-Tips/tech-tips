import AES from 'crypto-js/aes';
import encUtf8 from 'crypto-js/enc-utf8';

// 🔴 CHANGE THIS KEY! Make it something random and long.
// If rivals guess this, they can decode your links.
const SECRET_KEY = "TechTips_2025_Secret_Key_Do_Not_Steal"; 

export const decryptLink = (encryptedUrl: string): string => {
  try {
    const bytes = AES.decrypt(encryptedUrl, SECRET_KEY);
    const originalUrl = bytes.toString(encUtf8);
    return originalUrl || "#";
  } catch (e) {
    console.error("Failed to decrypt link");
    return "#";
  }
};

// Use this function TEMPORARILY in your browser console to generate your encrypted links
export const encryptLink = (url: string): string => {
  return AES.encrypt(url, SECRET_KEY).toString();
};
