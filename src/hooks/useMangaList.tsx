import { useState, useEffect } from "react";
import { Manga } from "../data/mangaTypes";

const useMangaList = (limit: number, offset: number, search: string) => {
  const [mangaList, setMangaList] = useState<Manga[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [hasMore, setHasMore] = useState(true);

  console.log(search);

  useEffect(() => {
    const fetchMangaList = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.mangadex.org/manga?limit=${limit}&offset=${offset}&includes[]=cover_art${
            search ? `&title=${search}` : ""
          }`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch manga list");
        }

        const data = await response.json();

        if (data.data.length < limit) {
          setHasMore(false);
        }

        setMangaList((prevMangaList) => [...prevMangaList, ...data.data]);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMangaList();
  }, [limit, offset, search]);

  return { mangaList, loading, error, hasMore };
};

export default useMangaList;
