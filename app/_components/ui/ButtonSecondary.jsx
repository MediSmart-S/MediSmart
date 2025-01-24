const ButtonSecondary = ({ children }) => {
  return (
    <button className="font-medium text-slate-800 bg-slate-50 px-8 py-2 rounded-md hover:-translate-y-0.5 will-change-transform transition-all duration-200">
      {children}
    </button>
  );
};

export default ButtonSecondary;
