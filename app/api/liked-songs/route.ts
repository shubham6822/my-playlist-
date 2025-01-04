import { NextResponse } from 'next/server';

export const GET = async (req: Request) => {
  const accessToken = req.headers.get('Authorization')?.split('Bearer ')[1];

  if (!accessToken) {
    return NextResponse.json({ error: 'Missing access token' }, { status: 401 });
  }

  const likedSongsUrl = 'https://api.spotify.com/v1/me/tracks?limit=50';
  const response = await fetch(likedSongsUrl, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    const error = await response.json();
    console.error('Failed to fetch liked songs:', error);
    return NextResponse.json({ error }, { status: response.status });
  }

  const likedSongs = await response.json();
  return NextResponse.json(likedSongs);
};
