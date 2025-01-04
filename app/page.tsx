import { Header } from "@/components/Header";
import { SongGrid } from "@/components/SongGrid";
import { PlayerBar } from "@/components/PlayerBar";
import LoginButton from "@/components/LoginButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <LoginButton />
      <div className="p-8">
        <SongGrid />
      </div>
      <PlayerBar />
    </main>
  );
}