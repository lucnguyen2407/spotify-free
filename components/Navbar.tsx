"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="p-4 bg-gray-900 text-white flex justify-between">
      <h1 className="text-xl font-bold">Spotify Clone</h1>
      {session ? (
        <button onClick={() => signOut()} className="bg-red-500 px-4 py-2 rounded">
          Logout
        </button>
      ) : (
        <button onClick={() => signIn("spotify")} className="bg-green-500 px-4 py-2 rounded">
          Login with Spotify
        </button>
      )}
    </nav>
  );
}