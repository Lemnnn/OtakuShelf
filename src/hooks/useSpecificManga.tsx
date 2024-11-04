import { useState, useEffect } from "react";
import { MangaResponse } from "../data/mangaTypes";

const useSpecificManga = (id?: string) => {
  const [mangaData, setMangaData] = useState<MangaResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMangaData = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          `https://api.mangadex.org/manga/${id}?includes%5B%5D=manga&includes%5B%5D=cover_art&includes%5B%5D=author&includes%5B%5D=artist&includes%5B%5D=tag&includes%5B%5D=creator`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch manga data");
        }
        const data = await response.json();
        setMangaData(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      }

      setLoading(false);
    };

    if (id) {
      fetchMangaData();
    }
  }, [id]);

  return { mangaData, loading, error };
};

export default useSpecificManga;
