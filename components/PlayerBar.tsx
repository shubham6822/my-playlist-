"use client";

import { Play, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const CURRENT_SONG = {
  title: "Currently Playing",
  artist: "Artist Name",
  cover: "https://source.unsplash.com/random/60x60?music"
} as const;

export function PlayerBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-zinc-800 p-4">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src={CURRENT_SONG.cover}
            alt={`${CURRENT_SONG.title} album cover`}
            className="w-12 h-12 rounded"
          />
          <div>
            <h3 className="font-medium">{CURRENT_SONG.title}</h3>
            <p className="text-sm text-gray-400">{CURRENT_SONG.artist}</p>
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-2 flex-1 max-w-md mx-8">
          <div className="flex items-center gap-4">
            <SkipBack className="w-5 h-5 cursor-pointer hover:text-orange-500" />
            <div className="bg-orange-500 p-2 rounded-full cursor-pointer hover:bg-orange-600">
              <Play className="w-6 h-6" />
            </div>
            <SkipForward className="w-5 h-5 cursor-pointer hover:text-orange-500" />
          </div>
          <Slider
            defaultValue={[0]}
            max={100}
            step={1}
            className="w-full"
          />
        </div>

        <div className="flex items-center gap-2">
          <Volume2 className="w-5 h-5" />
          <Slider
            defaultValue={[70]}
            max={100}
            step={1}
            className="w-24"
          />
        </div>
      </div>
    </div>
  );
}