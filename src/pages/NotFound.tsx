import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-[100dvh] w-screen gap-10">
      <div className="flex flex-col items-center">
        <h1 className="text-8xl font-extrabold">404</h1>
        <p className="text-8xl">Page Not Found</p>
      </div>
      <button
        className="bg-black text-white py-2 px-5 rounded-xl"
        onClick={() => navigate(-1)}
      >
        Take me back
      </button>
    </div>
  );
};

export default NotFound;
