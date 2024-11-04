const FilterList = () => {
  return (
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
  );
};

export default FilterList;
