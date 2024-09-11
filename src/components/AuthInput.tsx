interface AuthInputProps {
  label: string;
  type?: string;
}

const AuthInput: React.FC<AuthInputProps> = ({ label, type }) => {
  return (
    <div className="flex flex-col w-full px-5">
      <label className="text-xl font-bold">{label}</label>
      <input
        className="rounded-xl border-2 border-black w-full p-2"
        type={type}
      />
    </div>
  );
};

export default AuthInput;
