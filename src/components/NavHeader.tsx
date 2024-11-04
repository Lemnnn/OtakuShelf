import { useNavigate } from "react-router-dom";

const NavHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="sticky top-0 w-full px-10 h-16 flex items-center justify-center backdrop-blur-md bg-transparent z-50">
      <div className="flex justify-center items-center">
        <button className="px-3 h-16" onClick={() => navigate("/favorites")}>
          Favorites
        </button>
        <div className="flex items-center justify-center gap-3 px-20">
          <div className="rounded-full h-[40px] w-[40px] bg-black"></div>
          <p>Lemn</p>
        </div>
        <button className="px-3 h-16">Continue reading</button>
      </div>
    </div>
  );
};

export default NavHeader;
