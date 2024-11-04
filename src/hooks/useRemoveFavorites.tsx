import { useState } from "react";
import { useFavoriteMangaListContext } from "../context/FavoriteMangaListContext";

interface FavoriteResponse {
  message?: string;
  error?: string;
}

const useRemoveFavorites = () => {
  const [response, setResponse] = useState<FavoriteResponse | null>(null);
  const [removeFavoriteLoading, setRemoveFavoriteLoading] = useState(false);
  const [error, setError] = useState("");
  const { handleDeleteFavorites } = useFavoriteMangaListContext();

  const removeFavoriteManga = async (id: string) => {
    setRemoveFavoriteLoading(true);
    setError("");
    setResponse(null);

    try {
      const res = await fetch(
        `http://localhost:3000/api/favorite/remove/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!res.ok) {
        const errorResponse = await res.json();
        throw new Error(
          errorResponse.error || "Failed to remove manga from Favorites"
        );
      }

      const { data } = await res.json();
      setResponse(data);
      handleDeleteFavorites(id);
      setRemoveFavoriteLoading(false);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
      setRemoveFavoriteLoading(false);
    }
  };

  return { removeFavoriteManga, response, removeFavoriteLoading, error };
};

export default useRemoveFavorites;
