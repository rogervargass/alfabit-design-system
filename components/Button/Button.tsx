type ButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className }: ButtonProps) => {
  return (
    <button
      className={`bg-[#2D5BFF] rounded-lg px-8 py-3 text-white ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
