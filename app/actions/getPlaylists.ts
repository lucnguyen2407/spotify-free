"use server";

export async function getPlaylists() {
    // Fake data for development
    return {
        items: [
            {
                id: "1",
                name: "Chill Vibes",
                images: [{ url: "https://via.placeholder.com/150" }],
            },
            {
                id: "2",
                name: "Workout Mix",
                images: [{ url: "https://via.placeholder.com/150" }],
            },
            {
                id: "3",
                name: "Top Hits",
                images: [{ url: "https://via.placeholder.com/150" }],
            },
        ],
    };
}