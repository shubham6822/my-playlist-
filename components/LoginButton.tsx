'use client';

import { Button } from "./ui/button";

export default function LoginButton() {
  const handleLogin = () => {
    window.location.href = '/api/auth/login'; 
  };

  return (
    <Button onClick={handleLogin} className="hover:bg-white hover:text-black  rounded-full">
      Login
    </Button>
  )
}
