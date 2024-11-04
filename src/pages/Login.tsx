import { useState } from "react";
import AuthButton from "../components/AuthButton";
import AuthInput from "../components/AuthInput";
import AuthRedirect from "../components/AuthRedirect";
import AuthWithButtons from "../components/AuthWithButtons";
import VerticalDivider from "../components/VerticalDivider";
import { loginUser } from "../api/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    try {
      await loginUser(email, password);
      navigate("/home");
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("An unknown error occurred");
      }
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[url('./assets/MangaPanelLogIn.png')] bg-cover bg-no-repeat">
      <div className="w-[800px] h-[500px] bg-white rounded-xl flex flex-col items-center justify-center shadow-[10px_10px_20px_10px_rgba(0,0,0,0.8)]">
        <div className="flex gap-10">
          <div className="flex flex-col items-center justify-center w-[400px]">
            <h1 className="text-4xl font-bold">Otaku Shelf</h1>
            <p>Welcome back!</p>
            {errorMessage && (
              <p className="text-red-600 font-semibold pt-5">{errorMessage}</p>
            )}
            <div className="flex flex-col gap-4 items-center justify-center pt-10 w-full">
              <AuthInput
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <AuthInput
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col items-center justify-center pt-10 w-full">
              <AuthButton label="Sign In" onClick={handleLogin} />
              <AuthRedirect
                text="Don't have an account?"
                linkText="Register Now"
                link="/register"
              />
            </div>
          </div>
          <VerticalDivider />
          <AuthWithButtons />
        </div>
      </div>
    </div>
  );
};

export default Login;
