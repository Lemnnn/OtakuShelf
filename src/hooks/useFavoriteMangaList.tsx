import { useEffect, useState } from "react";
import { Favorite, Manga } from "../data/mangaTypes";

const useFavoriteMangaList = (
  ids: Favorite[],
  limit: number,
  offset: number
) => {
  const [mangaList, setMangaList] = useState<Manga[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>("");

  useEffect(() => {
    const fetchMangaListWithIds = async () => {
      if (ids.length === 0) {
        setMangaList([]);
        return;
      }

      setLoading(true);
      setError(null);

      const idsQuery = ids.map((id) => `ids[]=${id.manga_id}`).join("&");

      try {
        const response = await fetch(
          `https://api.mangadex.org/manga?limit=${limit}&offset=${offset}&includes[]=cover_art&${idsQuery}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch manga list from MangaDex");
        }

        const data = await response.json();
        setMangaList(data.data);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchMangaListWithIds();
  }, [ids, limit, offset]);

  return { mangaList, loading, error };
};

export default useFavoriteMangaList;
