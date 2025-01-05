"use client";

import { Upload, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function UploadPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-zinc-900">
        <Link href="/" className="flex items-center gap-2">
          <Music className="h-6 w-6 text-orange-500" />
          <h1 className="text-xl font-bold">RhythmoTune</h1>
        </Link>
      </header>

      <div className="max-w-2xl mx-auto p-8">
        <Card className="bg-zinc-900 p-8">
          <h2 className="text-2xl font-bold mb-6">Upload Your Music</h2>
          
          <div className="space-y-6">
            <div>
              <Label htmlFor="title">Song Title</Label>
              <Input
                id="title"
                placeholder="Enter song title"
                className="bg-zinc-800 border-zinc-700"
              />
            </div>

            <div>
              <Label htmlFor="artist">Artist Name</Label>
              <Input
                id="artist"
                placeholder="Enter artist name"
                className="bg-zinc-800 border-zinc-700"
              />
            </div>

            <div>
              <Label htmlFor="category">Category</Label>
              <select
                id="category"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-md p-2"
              >
                <option value="">Select a category</option>
                <option value="relax">Relax</option>
                <option value="sad">Sad</option>
                <option value="party">Party</option>
                <option value="romance">Romance</option>
                <option value="energetic">Energetic</option>
                <option value="jazz">Jazz</option>
                <option value="alternative">Alternative</option>
              </select>
            </div>

            <div className="border-2 border-dashed border-zinc-700 rounded-lg p-8">
              <div className="flex flex-col items-center justify-center gap-4">
                <Upload className="w-12 h-12 text-orange-500" />
                <div className="text-center">
                  <p className="text-lg font-medium">Drag and drop your audio file here</p>
                  <p className="text-sm text-gray-400">or</p>
                </div>
                <Button className="bg-orange-500 hover:bg-orange-600">
                  Choose File
                </Button>
                <p className="text-sm text-gray-400">
                  Supported formats: MP3, WAV (max 10MB)
                </p>
              </div>
            </div>

            <Button className="w-full bg-orange-500 hover:bg-orange-600">
              Upload Song
            </Button>
          </div>
        </Card>
      </div>
    </main>
  );
}