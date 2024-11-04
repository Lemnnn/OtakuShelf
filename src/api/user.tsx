const API_URL = "http://localhost:3000/api/user";

export const getUserData = async () => {
  try {
    const response = await fetch(`${API_URL}/me`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application-json" },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to fetch user data");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
