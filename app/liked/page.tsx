import { Header } from "@/components/Header";
import { SongGrid } from "@/components/SongGrid";
import React from "react";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <div className="p-8">
        <SongGrid />
      </div>
      {/* <PlayerBar /> */}
    </main>
  );
}
