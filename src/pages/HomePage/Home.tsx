import { useEffect, useState } from "react";
import HorizontalDivider from "../../components/HorizontalDivider";
import NavHeader from "../../components/NavHeader";
import FilterList from "./components/FilterList";
import MangaList from "./components/MangaList";

const Home = () => {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  return (
    <div className="relative w-screen h-full flex flex-col items-center">
      <NavHeader />
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-black font-extrabold text-8xl py-20">
          Otaku Shelf
        </h1>
        <div className="flex flex-col items-center w-full">
          <h1 className="text-2xl font-bold">
            Search or discover your favorite manga!
          </h1>
          <div className="flex items-center justify-center gap-3 py-4 w-full px-[350px] pb-9">
            <input
              className="border-4 border-black rounded-xl py-2 px-5 w-full"
              placeholder="ex. One Piece"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <button className="border-4 border-black rounded-xl py-2 w-[250px] font-extrabold">
              Clear Filters
            </button>
          </div>
        </div>
        <div className="w-[70%]">
          <HorizontalDivider />
        </div>
        <FilterList />
        <div className="w-[50%] pb-10">
          <HorizontalDivider />
        </div>
        <MangaList search={debouncedSearch} />
      </div>
    </div>
  );
};

export default Home;
