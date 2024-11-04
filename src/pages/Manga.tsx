import { useParams } from "react-router-dom";
import useSpecificManga from "../hooks/useSpecificManga";
import SpecificMangaHeader from "../components/SpecificMangaHeader";

import NavHeader from "../components/NavHeader";

const Manga = () => {
  const { mangaId } = useParams();
  const { mangaData, loading, error } = useSpecificManga(mangaId);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <NavHeader />
      {mangaData ? (
        <div>
          <SpecificMangaHeader
            mangaRelationships={mangaData?.data.relationships || []}
            mangaTitle={mangaData.data.attributes.title.en}
          />
          <div className="h-[3000px]"></div>
        </div>
      ) : (
        <p>No data found for manga with ID: {mangaId}</p>
      )}
    </div>
  );
};

export default Manga;
