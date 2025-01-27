import LogoDivider from "./LogoDivider";

const SectionHeader = ({ title, description, withDivider = true }) => {
  return (
    <div className="mb-4">
      {withDivider ? (
        <div className="bg-neutral-500/25 w-full h-px"></div>
      ) : null}
      <div className="container pt-24">
        <h1 className="font-semibold text-5xl text-center">{title}</h1>
        <div className="my-4">
          <LogoDivider />
        </div>
        <div className="flex justify-center">
          <p className="max-w-2xl text-lg text-center text-neutral-500">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
