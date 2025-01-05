"use client";

import { Volume2, Upload, LogOutIcon } from "lucide-react";
import LoginButton from "./LoginButton";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function Header() {
  const router = useRouter();
  const [user, setUser] = useState<any | null>();
  const token = localStorage.getItem("access_token");

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("access_token");
      try {
        const response = await fetch(`/api/user?access_token=${token}`);
        const data = await response.json();
        console.log("user", data.display_name);

        if (response.ok) {
          setUser(data);
        } else {
          console.log(data.error || "Failed to fetch user data");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserData();
  }, [token]);

  const handleLogout = () => {
    localStorage.clear();
    router.push("/");
  };

  return (
    <header className="flex justify-between items-center p-4 bg-zinc-900">
      <div className="flex items-center gap-2">
        <Volume2 className="h-6 w-6 text-orange-500" />
        <h1 className="text-xl font-bold">Playlist</h1>
      </div>
      {token ? (
        <div className="flex gap-2 items-center justify-center">
          <h1>{user?.display_name}</h1>
          <LogOutIcon
            size={20}
            onClick={handleLogout}
            className="hover:cursor-pointer"
          />
        </div>
      ) : (
        <LoginButton />
      )}
      {/* <Link href="/upload">
        <Button size="icon" variant="ghost" className="hover:text-orange-500">
          <Upload className="h-5 w-5" />
        </Button>
      </Link> */}
    </header>
  );
}
