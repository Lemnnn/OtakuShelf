import { FaGoogle } from "react-icons/fa";
import { FaXTwitter, FaMeta } from "react-icons/fa6";

const AuthWithButtons = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <button className="bg-black text-white py-2 w-[200px] rounded-lg">
        <div className="flex items-center justify-center gap-3">
          <FaGoogle />
          Sign In with Google
        </div>
      </button>
      <button className="bg-black text-white py-2 w-[200px] rounded-lg">
        <div className="flex items-center justify-center gap-3">
          <FaMeta />
          Sign In with Meta
        </div>
      </button>
      <button className="bg-black text-white py-2 w-[200px] rounded-lg">
        <div className="flex items-center justify-center gap-3">
          <FaXTwitter />
          Sign In with X
        </div>
      </button>
    </div>
  );
};

export default AuthWithButtons;
