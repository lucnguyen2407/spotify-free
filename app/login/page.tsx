"use client";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-black text-white">
      <h1 className="text-4xl font-bold mb-6">Spotify Clone</h1>
      <button onClick={() => signIn("spotify")} className="bg-green-500 px-4 py-2 rounded">
        Login with Spotify
      </button>
    </div>
  );
}
