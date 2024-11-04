import { useState } from "react";
import AuthButton from "../components/AuthButton";
import AuthInput from "../components/AuthInput";
import AuthRedirect from "../components/AuthRedirect";
import AuthWithButtons from "../components/AuthWithButtons";
import VerticalDivider from "../components/VerticalDivider";
import { registerUser } from "../api/auth";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const isPasswordValid = (password: string) => {
    return (
      password.length >= 8 &&
      /[a-zA-Z]/.test(password) &&
      /\d/.test(password) &&
      /[!@#$%^&*(),.?":{}|<>]/.test(password)
    );
  };

  const handleRegister = async () => {
    if (!isPasswordValid(password)) {
      setErrorMessage("Password doesn't meet the requirements.");
      setPassword("");
      return;
    }

    try {
      const data = await registerUser(email, password);
      console.log("Registration successful:", data);
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("An unknown error occurred");
      }
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[url('./assets/MangaPanelRegister.png')] bg-cover bg-no-repeat">
      <div className="w-[800px] h-[500px] bg-white rounded-xl flex flex-col items-center justify-center shadow-[10px_10px_20px_10px_rgba(0,0,0,0.8)]">
        <div className="flex gap-10">
          <div className="flex flex-col items-center justify-center w-[400px]">
            <h1 className="text-4xl font-bold">Otaku Shelf</h1>
            <p>Welcome!</p>
            {errorMessage && (
              <p className="text-red-600 font-semibold pt-5">{errorMessage}</p>
            )}
            <div className="flex flex-col gap-4 items-center justify-center pt-5 w-full">
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
            <div className="w-full items-start pl-5">
              <p
                className={
                  password.length >= 8
                    ? "text-green-600 font-bold"
                    : "font-medium"
                }
              >
                -Atleast 8 characters
              </p>
              <p
                className={
                  /[a-zA-Z]/.test(password)
                    ? "text-green-600 font-bold"
                    : "font-medium"
                }
              >
                -Atleast one upper or lower case character
              </p>
              <p
                className={
                  /\d/.test(password)
                    ? "text-green-600 font-bold"
                    : "font-medium"
                }
              >
                -Atleast one digit
              </p>
              <p
                className={
                  /[!@#$%^&*(),.?":{}|<>]/.test(password)
                    ? "text-green-600 font-bold"
                    : "font-medium"
                }
              >
                -Atleast one symbol
              </p>
            </div>
            <div className="flex flex-col items-center justify-center pt-5 w-full">
              <AuthButton label="Register" onClick={handleRegister} />
              <AuthRedirect
                text="Already have an account?"
                linkText="Log In"
                link="/login"
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

export default Register;
