import { useState, useEffect } from "react";

interface FavoriteMangaResponse {
  message?: string;
  data?: { id: string; manga_id: string }[];
  error?: string;
}

const useGetUserFavorites = (userId: string) => {
  const [response, setResponse] = useState<FavoriteMangaResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFavorites = async () => {
      if (!userId) return;

      setLoading(true);
      setError("");
      setResponse(null);

      try {
        const res = await fetch(
          `http://localhost:3000/api/favorite/${userId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!res.ok) {
          const errorResponse = await res.json();
          throw new Error(
            errorResponse.error || "Failed to fetch favorite mangas"
          );
        }

        const data = await res.json();
        setResponse(data);
        setLoading(false);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
        setLoading(false);
      }
    };

    fetchFavorites();
  }, [userId]);

  return { response, loading, error };
};

export default useGetUserFavorites;
