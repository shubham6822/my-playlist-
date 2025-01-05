"use client";

import { useState } from "react";
import { SongCard } from "./SongCard";
import SpotifyEmbedPlayer from "./SpotifyEmbedPlayer";

export function SongGrid() {
  const songs = [
    "track/7wGgYAOMhhRObOGdWlJ9Hi",
    "track/3be9ACTxtcL6Zm4vJRUiPG",
    "track/3hB9lDLyAClYVZivMMl20N",
    "track/5yqr66QIdRvhh5cxjgpkJh",
  ];
  const [data, setData] = useState<any | null>();

  const getEmbedUri = (spotifyUri: string) => {
    const [type, id] = spotifyUri.split(":").slice(1); // Extract type and id
    return `${type}/${id}`; // Convert to 'track/{id}' format
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">
        {data?.items?.length > 0 ? "Soptify ❤ Songs" : "Shubham fav's"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data?.items?.length > 0
          ? data.items.map((t: any) => (
              <div key={t}>
                <SpotifyEmbedPlayer uri={getEmbedUri(t.track.uri)} />
              </div>
            ))
          : songs.map((song) => (
              <div key={song}>
                <SpotifyEmbedPlayer uri={song} />
              </div>
            ))}
      </div>
    </div>
  );
}
