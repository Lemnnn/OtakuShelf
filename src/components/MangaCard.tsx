// import { useFavoriteMangaListContext } from "../context/FavoriteMangaListContext";
import { Relationship } from "../data/mangaTypes";
import { getCoverImage } from "../utils/getCoverImage";

interface MangaCardProps {
  mangaId: string;
  mangaRelationships: Relationship[];
  mangaTitle: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const MangaCard: React.FC<MangaCardProps> = ({
  mangaId,
  mangaRelationships,
  mangaTitle,
  onClick,
}) => {
  const coverImage = getCoverImage(mangaRelationships);
  const bgUrl = `https://mangadex.org/covers/${mangaId}/${coverImage}`;
  // const { favoriteMangaIds } = useFavoriteMangaListContext();

  // const handleIsFavorite = (mangaId: string) => {
  //   const favoriteMangas = favoriteMangaIds.map((manga) => manga.manga_id);

  //   return favoriteMangas.includes(mangaId);
  // };

  return (
    <div
      onClick={onClick}
      className="h-[350px] w-full border-2 border-black rounded-lg flex flex-col justify-end relative"
      style={{
        backgroundImage: `url(${bgUrl})`,
        backgroundSize: "auto 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-x-0 bottom-0 h-[300px] bg-gradient-to-t from-black to-transparent"></div>

      <div className="relative z-10 p-4">
        <h2 className="text-sm text-white font-bold mb-2 line-clamp-2 overflow-ellipsis">
          {mangaTitle}
        </h2>
      </div>
    </div>
  );
};

export default MangaCard;
