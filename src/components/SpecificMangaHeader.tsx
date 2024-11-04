import { useFavoriteMangaListContext } from "../context/FavoriteMangaListContext";
import { Relationship } from "../data/mangaTypes";
import useFavorites from "../hooks/useFavorites";
import useRemoveFavorites from "../hooks/useRemoveFavorites";

import { getCoverImage } from "../utils/getCoverImage";
import { useParams } from "react-router-dom";

interface SpecificMangaCardProps {
  mangaRelationships: Relationship[];
  mangaTitle: string;
}

const SpecificMangaHeader: React.FC<SpecificMangaCardProps> = ({
  mangaRelationships,
  mangaTitle,
}) => {
  const { mangaId } = useParams();
  const coverImage = getCoverImage(mangaRelationships);

  const bgUrl = `https://mangadex.org/covers/${mangaId}/${coverImage}`;

  const userId = "7bcaaa9d-f4d8-4b05-a6ec-427218d5885e";
  const { addFavoriteManga, favoriteLoading } = useFavorites();
  const { removeFavoriteManga, removeFavoriteLoading } = useRemoveFavorites();
  const { favoriteMangaIds } = useFavoriteMangaListContext();

  const handleAddToFavorites = () => {
    if (userId && mangaId) {
      addFavoriteManga(userId, mangaId);
    }
  };

  console.log(favoriteMangaIds);

  const handleRemoveFromFavorites = () => {
    const favoriteId = favoriteMangaIds.filter(
      (favourite) => favourite.manga_id === mangaId
    );

    removeFavoriteManga(favoriteId[0].id!);
  };

  const handleIsFavorite = (mangaId: string) => {
    const favoriteMangas = favoriteMangaIds.map((manga) => manga.manga_id);

    return favoriteMangas.includes(mangaId);
  };

  return (
    <div>
      <div
        className="relative min-h-[400px] w-screen overflow-hidden after:backdrop-blur-sm after:absolute after:w-full after:h-full"
        style={{
          background: `radial-gradient(circle at top, rgba(0,0,0,0.6), rgba(0,0,0,0.8) 75%), no-repeat top 35% center / 100% url(${bgUrl}) fixed`,
        }}
      ></div>
      <div className="absolute top-[195px] left-[50px] flex gap-10">
        <img src={bgUrl} className="w-[250px] h-[350px] rounded-lg" />
        <div className="flex flex-col justify-between">
          <h1
            className="font-bold text-3xl text-white"
            style={{ textShadow: " 2px 2px 10px #000000" }}
          >
            {mangaTitle}
          </h1>
          {handleIsFavorite(mangaId!) ? (
            <button
              onClick={handleRemoveFromFavorites}
              className="text-white bg-black px-10 py-2 w-fit"
              disabled={removeFavoriteLoading}
            >
              {removeFavoriteLoading ? "Removing..." : "Remove from Favorites"}
            </button>
          ) : (
            <button
              onClick={handleAddToFavorites}
              className="text-white bg-black px-10 py-2 w-fit"
              disabled={favoriteLoading}
            >
              {favoriteLoading ? "Adding..." : "Add to Favorites"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpecificMangaHeader;
