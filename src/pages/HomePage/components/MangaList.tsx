import { useNavigate } from "react-router-dom";
import MangaCard from "../../../components/MangaCard";
import useMangaList from "../../../hooks/useMangaList";
import { useEffect, useState } from "react";

interface MangaListProps {
  search: string;
}

const MangaList = ({ search }: MangaListProps) => {
  const navigate = useNavigate();
  const [offset, setOffset] = useState(0);
  const { mangaList, loading, error, hasMore } = useMangaList(
    40,
    offset,
    search
  );

  const handleScroll = () => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;

    if (bottom && !loading && hasMore) {
      setOffset((prevOffset) => prevOffset + 40);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);

  if (loading && offset === 0) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="grid grid-cols-6 gap-5 mx-auto px-10 pb-10">
      {mangaList.length > 0 ? (
        mangaList.map((manga) => (
          <MangaCard
            key={manga.id}
            mangaId={manga.id}
            mangaRelationships={manga.relationships || []}
            mangaTitle={manga.attributes.title.en || "No title available"}
            onClick={() => {
              navigate(`/manga/${manga.id}`);
            }}
          />
        ))
      ) : (
        <p>Loading manga...</p>
      )}
    </div>
  );
};

export default MangaList;
