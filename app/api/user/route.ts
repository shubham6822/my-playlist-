import { NextResponse } from "next/server";

export async function GET(req: Request) {
  // Parse the URL from the request
  const url = new URL(req.url);

  // Extract the access token from the query string
  const access_token = url.searchParams.get("access_token");

  if (!access_token) {
    return NextResponse.json(
      { error: "No access token provided" },
      { status: 400 }
    );
  }

  try {
    // Fetch user data from Spotify using the access token
    const response = await fetch("https://api.spotify.com/v1/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to fetch user data from Spotify",
        message: error.message,
      },
      { status: 500 }
    );
  }
}
