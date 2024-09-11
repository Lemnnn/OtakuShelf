interface AuthButtonProps {
  label: string;
}

const AuthButton: React.FC<AuthButtonProps> = ({ label }) => {
  return (
    <button className="bg-black text-white w-[200px] rounded-xl p-2">
      {label}
    </button>
  );
};

export default AuthButton;
