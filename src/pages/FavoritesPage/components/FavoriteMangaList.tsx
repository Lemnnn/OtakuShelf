import { useNavigate } from "react-router-dom";
import MangaCard from "../../../components/MangaCard";
import { useFavoriteMangaListContext } from "../../../context/FavoriteMangaListContext";
import useFavoriteMangaList from "../../../hooks/useFavoriteMangaList";

const FavoriteMangaList = () => {
  const navigate = useNavigate();
  const {
    favoriteMangaIds,
    loading: userFavoritesLoading,
    error: userFavoritesError,
  } = useFavoriteMangaListContext();

  const {
    mangaList,
    loading: mangaListLoading,
    error: mangaListError,
  } = useFavoriteMangaList(favoriteMangaIds, 10, 0);

  if (userFavoritesLoading || mangaListLoading) return <p>Loading manga...</p>;
  if (userFavoritesError || mangaListError)
    return <p>Error: {userFavoritesError || mangaListError}</p>;

  return (
    <div className="grid grid-cols-6 gap-5 mx-auto px-10">
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
        <p>No favorite manga found.</p>
      )}
    </div>
  );
};

export default FavoriteMangaList;
