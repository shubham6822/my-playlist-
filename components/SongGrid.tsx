"use client";

import { useEffect, useState } from "react";
import SpotifyEmbedPlayer from "./SpotifyEmbedPlayer";

export function SongGrid() {
  const [data, setData] = useState<any | null>();

  useEffect(() => {
    const list: any = localStorage.getItem("list");
    setData(JSON.parse(list));
  });

  const getEmbedUri = (spotifyUri: string) => {
    const [type, id] = spotifyUri.split(":").slice(1); // Extract type and id
    return `${type}/${id}`; // Convert to 'track/{id}' format
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Soptify liked songs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data?.items &&
          data?.items.map((t: any) => (
            <div key={t}>
              <SpotifyEmbedPlayer uri={getEmbedUri(t.track.uri)} />
            </div>
          ))}
      </div>
    </div>
  );
}
