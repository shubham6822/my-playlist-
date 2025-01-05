import { Header } from "@/components/Header";
import { SongGrid } from "@/components/SongGrid";
import { PlayerBar } from "@/components/PlayerBar";

export default function Home() {
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