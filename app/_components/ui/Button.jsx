const Button = ({ children, className = "" }) => {
  return (
    <button
      className={`font-medium text-white text-lg bg-primary-500 px-8 py-2 rounded-md hover:-translate-y-0.5 will-change-transform transition-all duration-200 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
