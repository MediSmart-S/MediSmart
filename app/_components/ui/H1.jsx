const H1 = ({ children, className = "" }) => {
  return <h1 className={`font-semibold text-4xl ${className}`}>{children}</h1>;
};

export default H1;
