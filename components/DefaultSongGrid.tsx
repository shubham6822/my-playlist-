import React from "react";
import SpotifyEmbedPlayer from "./SpotifyEmbedPlayer";

export default function DefaultSongGrid() {
  const songs = [
    "track/7wGgYAOMhhRObOGdWlJ9Hi",
    "track/3be9ACTxtcL6Zm4vJRUiPG",
    "track/3hB9lDLyAClYVZivMMl20N",
    "track/5yqr66QIdRvhh5cxjgpkJh",
  ];
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">Shubham fav&apos;s 😾</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {songs.map((song) => (
          <div key={song}>
            <SpotifyEmbedPlayer uri={song} />
          </div>
        ))}
      </div>
    </>
  );
}
