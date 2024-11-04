import React from "react";

interface AuthButtonProps {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const AuthButton: React.FC<AuthButtonProps> = ({ label, onClick }) => {
  return (
    <button
      className="bg-black text-white w-[200px] rounded-xl p-2"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default AuthButton;
