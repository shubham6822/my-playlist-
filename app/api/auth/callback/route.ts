import { NextResponse } from 'next/server';
import axios from 'axios';

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get('code');

  if (!code) {
    return NextResponse.json({ error: 'Authorization code not found' }, { status: 400 });
  }

  try {
    const tokenResponse = await axios.post(
      'https://accounts.spotify.com/api/token',
      new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: process.env.SPOTIFY_REDIRECT_URI!,
        client_id: process.env.SPOTIFY_CLIENT_ID!,
        client_secret: process.env.SPOTIFY_CLIENT_SECRET!,
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    const { access_token, refresh_token, expires_in } = tokenResponse.data;

    // Optionally store tokens in a session or database
    return NextResponse.json({ access_token, refresh_token, expires_in });
  } catch (error: any) {
    console.error('Error exchanging code for token:', error.response?.data || error.message);
    return NextResponse.json({ error: 'Failed to fetch access token' }, { status: 500 });
  }
};
