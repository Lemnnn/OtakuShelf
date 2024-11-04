import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import useGetUserFavorites from "../hooks/useGetUserFavorites";
import { Favorite } from "../data/mangaTypes";

interface FavoriteMangaListProviderType {
  favoriteMangaIds: Favorite[];
  loading: boolean;
  error: string | null;
  handleUpdateFavorites: (favorite: Favorite) => void;
  handleDeleteFavorites: (mangaId: string) => void;
}

const FavoriteMangaListProviderContext = createContext<
  FavoriteMangaListProviderType | undefined
>(undefined);

export const useFavoriteMangaListContext = () => {
  return useContext(
    FavoriteMangaListProviderContext
  ) as FavoriteMangaListProviderType;
};

export const FavoriteMangaListProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { response, loading, error } = useGetUserFavorites(
    "7bcaaa9d-f4d8-4b05-a6ec-427218d5885e"
  );
  const [favoriteMangaIds, setFavoriteMangaIds] = useState<Favorite[]>([]);

  const handleUpdateFavorites = (favorite: Favorite) => {
    setFavoriteMangaIds([...favoriteMangaIds, favorite]);
  };

  const handleDeleteFavorites = (id: string) => {
    const newFavorites = favoriteMangaIds.filter((cur) => cur.id !== id);
    setFavoriteMangaIds(newFavorites);
    console.log(favoriteMangaIds);
  };

  useEffect(() => {
    if (response?.data) {
      const favourite = response.data.map((fav) => fav);
      setFavoriteMangaIds(favourite);
    }
  }, [response]);

  return (
    <FavoriteMangaListProviderContext.Provider
      value={{
        favoriteMangaIds,
        loading,
        error,
        handleUpdateFavorites,
        handleDeleteFavorites,
      }}
    >
      {children}
    </FavoriteMangaListProviderContext.Provider>
  );
};
