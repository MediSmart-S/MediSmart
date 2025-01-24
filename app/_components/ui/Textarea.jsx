const Textarea = ({ placeholder }) => {
  return (
    <textarea
      rows={4}
      placeholder={placeholder}
      className="w-full text-lg px-3 py-1.5 rounded-md outline-none border border-slate-300 hover:border-primary-500 focus:border-primary-500 transition-all duration-300"
    ></textarea>
  );
};

export default Textarea;
