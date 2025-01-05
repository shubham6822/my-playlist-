"use client";

import { Volume2, Upload } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import LoginButton from "./LoginButton";

export function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-zinc-900">
      <div className="flex items-center gap-2">
        <Volume2 className="h-6 w-6 text-orange-500" />
        <h1 className="text-xl font-bold">Playlist</h1>
      </div>
      <LoginButton />
      {/* <Link href="/upload">
        <Button size="icon" variant="ghost" className="hover:text-orange-500">
          <Upload className="h-5 w-5" />
        </Button>
      </Link> */}
    </header>
  );
}