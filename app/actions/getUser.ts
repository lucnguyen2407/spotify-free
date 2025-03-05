"use server";

export async function getUser() {
    // Fake data for development
    return {
        display_name: "Demo User",
        email: "demo@example.com",
        id: "123456789",
    };
}