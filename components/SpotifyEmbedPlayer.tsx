import React from 'react';

const SpotifyEmbedPlayer = ({ uri }: { uri: string }) => {
  return (
    <iframe
      src={`https://open.spotify.com/embed/${uri}`}
      width="300"
      height="380"
      frameBorder="0"
      allow="encrypted-media"
    ></iframe>
  );
};

export default SpotifyEmbedPlayer;
