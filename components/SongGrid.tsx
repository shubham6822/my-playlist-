"use client";

import { SongCard } from "./SongCard";

const DUMMY_SONGS = [
  { id: 1, title: "Summer Vibes", artist: "Groove Masters" },
  { id: 2, title: "Midnight Dreams", artist: "Luna Echo" },
  { id: 3, title: "Urban Flow", artist: "City Beats" },
  { id: 4, title: "Ocean Waves", artist: "Coastal Sound" },
  { id: 5, title: "Mountain High", artist: "Peak Harmony" },
  { id: 6, title: "Desert Wind", artist: "Sand Riders" },
] as const;

export function SongGrid() {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Popular Songs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {DUMMY_SONGS.map((song) => (
          <SongCard key={song.id} {...song} />
        ))}
      </div>
    </div>
  );
}