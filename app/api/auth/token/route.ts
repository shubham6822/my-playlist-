// app/api/auth/token/route.ts

export const dynamic = 'force-dynamic';  // This forces dynamic handling

export const POST = async (req: Request) => {
  const { code } = await req.json();
  
  const clientId = process.env.SPOTIFY_CLIENT_ID!;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET!;
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI!;

  const tokenUrl = 'https://accounts.spotify.com/api/token';
  const body = new URLSearchParams({
    grant_type: 'authorization_code',
    code,
    redirect_uri: redirectUri,
    client_id: clientId,
    client_secret: clientSecret,
  });
  // Base64 encode clientId and clientSecret
  const encodedCredentials = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
  const response = await fetch(tokenUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${encodedCredentials}`,
    },
    body: body.toString(),
  });

  if (!response.ok) {
    const error = await response.json();
    console.error('Spotify API error:', error);
    return new Response(JSON.stringify({ error }), { status: response.status });
  }

  const tokens = await response.json();
  return new Response(JSON.stringify(tokens), { status: 200 });
};
