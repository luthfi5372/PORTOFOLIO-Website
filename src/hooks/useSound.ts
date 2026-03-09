
"use client";

export const useSound = (url: string) => {
  const play = () => {
    // Check if sounds are muted
    const isMuted = typeof window !== "undefined" && localStorage.getItem("sound-muted");
    if (isMuted === "true") return;
    
    const audio = new Audio(url);
    audio.volume = 0.2; // Very subtle volume for elegance
    audio.play().catch(() => {
      // Ignore error if user hasn't interacted with page yet (browser policy)
    });
  };

  return play;
};

// Preload sounds for instant playback
export const preloadSound = (url: string) => {
  const audio = new Audio(url);
  audio.preload = "auto";
  return audio;
};
