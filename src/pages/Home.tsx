import HorizontalDivider from "../components/HorizontalDivider";

const Home = () => {
  return (
    <div className="w-screen h-full flex flex-col items-center ">
      <div className="w-full px-10 h-16 shadow-xl flex items-center justify-center">
        <div className="flex justify-center items-center">
          <button className="px-3 h-16">Favorites</button>
          <div className="flex items-center justify-center gap-3 px-20">
            <div className="rounded-full h-[40px] w-[40px] bg-black"></div>
            <p>Lemn</p>
          </div>
          <button className="px-3 h-16">Continue reading</button>
        </div>
      </div>
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
            />
            <button className="border-4 border-black rounded-xl py-2 w-[250px] font-extrabold">
              Clear Filters
            </button>
          </div>
        </div>
        <div className="w-[70%]">
          <HorizontalDivider />
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="text-md font-bold py-5">Manga Type</h1>
          <div className="flex items-center justify-center gap-3">
            <button className="text-sm border-2 border-black rounded-xl py-1 px-2 font-extrabold">
              Manga
            </button>
            <button className="text-sm border-2 border-black rounded-xl py-1 px-2 font-extrabold">
              Manhwa
            </button>
            <button className="text-sm border-2 border-black rounded-xl py-1 px-2 font-extrabold">
              Manhua
            </button>
          </div>
          <h1 className="text-md font-bold py-5">Genre</h1>
          <div className="flex items-center justify-center gap-3 pb-12">
            <button className="text-sm border-2 border-black rounded-xl py-1 px-2 font-extrabold">
              Action
            </button>
            <button className="text-sm border-2 border-black rounded-xl py-1 px-2 font-extrabold">
              Romance
            </button>
            <button className="text-sm border-2 border-black rounded-xl py-1 px-2 font-extrabold">
              Slice of life
            </button>
          </div>
        </div>
        <div className="w-[50%]">
          <HorizontalDivider />
        </div>
      </div>
    </div>
  );
};

export default Home;
