import AuthButton from "../components/AuthButton";
import AuthInput from "../components/AuthInput";
import AuthRedirect from "../components/AuthRedirect";
import AuthWithButtons from "../components/AuthWithButtons";
import VerticalDivider from "../components/VerticalDivider";

const Register = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[url('./assets/MangaPanelRegister.png')] bg-cover bg-no-repeat">
      <div className="w-[800px] h-[500px] bg-white rounded-xl flex flex-col items-center justify-center shadow-[10px_10px_20px_10px_rgba(0,0,0,0.8)]">
        <div className="flex gap-10">
          <div className="flex flex-col items-center justify-center w-[400px]">
            <h1 className="text-4xl font-bold">Otaku Shelf</h1>
            <p>Welcome back!</p>
            <div className="flex flex-col gap-4 items-center justify-center pt-10 w-full">
              <AuthInput label="Email" />
              <AuthInput label="Password" type="password" />
              <AuthInput label="Confirm password" type="password" />
            </div>
            <div className="flex flex-col items-center justify-center pt-10 w-full">
              <AuthButton label="Register" />
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
