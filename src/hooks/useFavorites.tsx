import { useState } from "react";
import { useFavoriteMangaListContext } from "../context/FavoriteMangaListContext";

interface FavoriteResponse {
  message?: string;
  error?: string;
}

const useFavorites = () => {
  const [response, setResponse] = useState<FavoriteResponse | null>(null);
  const [favoriteLoading, setFavoriteLoading] = useState(false);
  const [error, setError] = useState("");
  const { handleUpdateFavorites } = useFavoriteMangaListContext();

  const addFavoriteManga = async (userId: string, mangaId: string) => {
    setFavoriteLoading(true);
    setError("");
    setResponse(null);

    try {
      const res = await fetch("http://localhost:3000/api/favorite/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: userId,
          manga_id: mangaId,
        }),
      });

      if (!res.ok) {
        const errorResponse = await res.json();
        throw new Error(
          errorResponse.error || "Failed to add manga to Favorites"
        );
      }

      const { data } = await res.json();
      setResponse(data);
      handleUpdateFavorites(data);
      setFavoriteLoading(false);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
      setFavoriteLoading(false);
    }
  };

  return { addFavoriteManga, response, favoriteLoading, error };
};

export default useFavorites;
