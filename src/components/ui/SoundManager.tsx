"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { motion } from "framer-motion";

interface SoundContextType {
  isMuted: boolean;
  toggleMute: () => void;
}

const SoundContext = createContext<SoundContextType>({
  isMuted: false,
  toggleMute: () => {},
});

export const useSoundContext = () => useContext(SoundContext);

interface SoundProviderProps {
  children: ReactNode;
}

export function SoundProvider({ children }: SoundProviderProps) {
  const [isMuted, setIsMuted] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Check for saved preference
    const savedMute = localStorage.getItem("sound-muted");
    if (savedMute) {
      setIsMuted(JSON.parse(savedMute));
    }
  }, []);

  const toggleMute = () => {
    setIsMuted((prev) => {
      const newValue = !prev;
      localStorage.setItem("sound-muted", JSON.stringify(newValue));
      return newValue;
    });
  };

  if (!isClient) {
    return <>{children}</>;
  }

  return (
    <SoundContext.Provider value={{ isMuted, toggleMute }}>
      {children}
    </SoundContext.Provider>
  );
}

export function SoundToggle() {
  const { isMuted, toggleMute } = useSoundContext();

  return (
    <motion.button
      onClick={toggleMute}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full glass shadow-lg"
      aria-label={isMuted ? "Unmute sounds" : "Mute sounds"}
    >
      {isMuted ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <line x1="23" y1="9" x2="17" y2="15" />
          <line x1="17" y1="9" x2="23" y2="15" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
        </svg>
      )}
    </motion.button>
  );
}
