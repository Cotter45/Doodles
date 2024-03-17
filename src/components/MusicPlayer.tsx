"use client";

import { MusicalNoteIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (playing) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
    setPlaying(!playing);
  };

  return (
    <div className="fixed z-50 top-2 right-2 flex justify-center items-center">
      <audio
        ref={audioRef}
        controls={false}
        autoPlay={playing}
        loop
        className="invisible"
        src="/music/flowers.mp3"
      />
      <button
        onClick={togglePlay}
        className="p-3 rounded-full bg-transparent bg-opacity-50 hover:bg-opacity-100 border-2 hover:bg-neutral-200 transition-colors duration-300 ease-in-out"
      >
        {playing ? (
          <MusicalNoteIcon className="h-6 w-6" />
        ) : (
          <div className="relative icon-container">
            <MusicalNoteIcon className="h-6 w-6" />
          </div>
        )}
      </button>
    </div>
  );
}
