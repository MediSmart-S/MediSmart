const Input = ({
  type = "text",
  placeholder = "",
  label,
  id,
  bigger = false,
}) => {
  return (
    <>
      {label ? (
        <div className="flex justify-start items-end">
          <label
            htmlFor={id}
            className="font-semibold text-lg text-neutral-500 cursor-text"
          >
            {label}
          </label>
        </div>
      ) : null}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`w-full text-lg ${
          bigger ? "px-4 py-2.5" : "px-3 py-1.5"
        } rounded-md outline-none border border-slate-300 hover:border-primary-500 focus:border-primary-500 transition-all duration-300`}
      />
    </>
  );
};

export default Input;
