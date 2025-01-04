import { NextResponse } from 'next/server';

export const GET = async () => {


  const scope = 'user-library-read'; // Add scopes as needed
  if(!process.env.SPOTIFY_REDIRECT_URI) return console.log("redirect url is missing")
  const spotifyAuthUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${process.env.SPOTIFY_CLIENT_ID}&scope=${encodeURIComponent(
    scope
  )}&redirect_uri=${process.env.SPOTIFY_REDIRECT_URI}`;

  return NextResponse.redirect(spotifyAuthUrl)      ;
};
