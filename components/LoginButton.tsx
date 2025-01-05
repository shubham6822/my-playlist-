"use client";

import { Button } from "./ui/button";

export default function LoginButton() {
  const handleLogin = () => {
    window.location.href = "/api/auth/login";
  };

  return (
    <Button
      onClick={handleLogin}
      className="bg-white font-semibold text-black hover:text-black hover:bg-slate-200  rounded-full"
    >
      Login
    </Button>
  );
}
