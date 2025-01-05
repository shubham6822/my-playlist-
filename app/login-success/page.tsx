"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [token, setToken] = useState<string | null>(null);
  useEffect(() => {
    const fetchAccessToken = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get("code");
      const response = await fetch("/api/auth/token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to fetch access token");
      }
      const data = await response.json();
      console.log("access_token", token);
      localStorage.setItem("access_token", data.access_token);
      setToken(data.access_token);
    };

    fetchAccessToken();
  }, []);

  useEffect(() => {
    if (!token) return;
    const fetchLikedSongs = async () => {
      const response = await fetch("/api/liked-songs", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to fetch liked songs");
      }
      const data = await response.json();
      console.log("data list", data.items);

      localStorage.setItem("list", JSON.stringify(data));
    };

    fetchLikedSongs();
  }, [token]);

  const router = useRouter();
  const handleBackToHome = () => {
    router.push("/liked-songs");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-center text-white">
      <h1 className="text-5xl font-extrabold text-red-600 mb-4">
        💀 Login Successful! 💀
      </h1>
      <p className="text-lg mb-3">
        Congratulations, you’ve sold your soul to the app gods. I hope you’re
        happy.
      </p>
      <p className="text-md mb-6">
        We’ve sent a carrier pigeon with your credentials, but don’t worry, it’s
        totally safe. Probably.
      </p>
      <p className="text-sm text-gray-400 mb-6">
        If you feel a sudden chill, it’s just the app’s server room... don’t
        worry about it.
      </p>
      <button
        onClick={handleBackToHome}
        className="px-8 py-4 text-white bg-gray-700 rounded-md shadow-lg hover:bg-gray-600 transition-all"
      >
        Back to the Darkness 🏠
      </button>
    </div>
  );
}
