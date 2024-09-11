interface AuthRedirectProps {
  text: string;
  linkText: string;
  link: string;
}

const AuthRedirect: React.FC<AuthRedirectProps> = ({
  text,
  linkText,
  link,
}) => {
  return (
    <div className="flex gap-1">
      <p>{text}</p>
      <a href={link} className="text-blue-900">
        {linkText}
      </a>
    </div>
  );
};

export default AuthRedirect;
