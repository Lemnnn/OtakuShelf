import React, { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";

interface AuthInputProps {
  label: string;
  type?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const AuthInput: React.FC<AuthInputProps> = ({
  label,
  type,
  value,
  onChange,
}) => {
  const [togglePassword, setTogglePassword] = useState(false);

  return (
    <div className="flex flex-col w-full px-5">
      <label className="text-xl font-bold">{label}</label>
      {type === "password" ? (
        <div className="flex w-full">
          <input
            className="rounded-xl border-2 border-black w-full p-2 pr-12"
            type={togglePassword ? "text" : type}
            value={value}
            onChange={onChange}
          />
          <button
            className="absolute right-[48%] p-2"
            onClick={() => setTogglePassword(!togglePassword)}
          >
            {!togglePassword ? <FaEyeSlash size={26} /> : <FaEye size={24} />}
          </button>
        </div>
      ) : (
        <input
          className="rounded-xl border-2 border-black w-full p-2 "
          type={type}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default AuthInput;
