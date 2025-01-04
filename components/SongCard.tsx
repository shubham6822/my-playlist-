"use client";

import { Card } from "@/components/ui/card";

interface SongCardProps {
  id: number;
  title: string;
  artist: string;
}

export function SongCard({ id, title, artist }: SongCardProps) {
  return (
    <Card className="bg-zinc-900 p-4 hover:bg-zinc-800 transition cursor-pointer">
      <img
        src={`https://source.unsplash.com/random/300x300?music=${id}`}
        alt={`${title} album cover`}
        className="w-full aspect-square object-cover rounded-lg mb-2"
      />
      <h3 className="font-medium">{title}</h3>
      <p className="text-sm text-gray-400">{artist}</p>
    </Card>
  );
}