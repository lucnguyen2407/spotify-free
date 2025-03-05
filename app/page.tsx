import { getUser } from "@/app/actions/getUser";
import { getPlaylists } from "@/app/actions/getPlaylists";

export default async function HomePage() {
  const user = await getUser();
  const playlists = await getPlaylists();

  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-3xl font-bold ">Welcome, {user?.display_name || "Guest"}!</h1>
      <h2 className="text-2xl mt-4">Your Playlists:</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {playlists.items.map((playlist: any) => (
          <div key={playlist.id} className="bg-gray-800 p-4 rounded">
            <img src={playlist.images[0]?.url} alt={playlist.name} className="rounded" />
            <p className="mt-2">{playlist.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
