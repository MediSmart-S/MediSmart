export const colors = {
  cyan: [
    "bg-cyan-400",
    "bg-cyan-400/15 hover:bg-cyan-400/25",
    "fill-cyan-400",
    "text-cyan-400",
  ],
  red: [
    "bg-red-400",
    "bg-red-400/15 hover:bg-red-400/25",
    "fill-red-400",
    "text-red-400",
  ],
  green: [
    "bg-green-400",
    "bg-green-400/15 hover:bg-green-400/25",
    "fill-green-400",
    "text-green-400",
  ],
  blue: [
    "bg-blue-400",
    "bg-blue-400/15 hover:bg-blue-400/25",
    "fill-blue-400",
    "text-blue-400",
  ],
  amber: [
    "bg-amber-400",
    "bg-amber-400/15 hover:bg-amber-400/25",
    "fill-amber-400",
    "text-amber-400",
  ],
  neutral: [
    "bg-neutral-400",
    "bg-neutral-400/15 hover:bg-neutral-400/25",
    "fill-neutral-400",
    "text-neutral-400",
  ],
};

const DepartmentSelect = ({
  value,
  placeholder,
  currentDepartment,
  selectDepartment,
  Icon,
  color,
}) => {
  const selectCurrent = () => {
    if (value !== currentDepartment) selectDepartment(value);
  };

  const isSelected = currentDepartment === value;

  return (
    <div className="flex justify-center items-center">
      <div
        className={`relative flex flex-col items-center w-[200px] ${
          isSelected ? colors[color][0] : colors[color][1]
        } cursor-pointer py-4 rounded-md transition-all duration-200`}
        onClick={selectCurrent}
      >
        <Icon
          className={`${
            isSelected ? "fill-white" : colors[color][2]
          } w-16 h-16`}
        />
        <p
          className={`${
            isSelected ? "text-white" : colors[color][3]
          } font-medium text-md mt-4`}
        >
          {placeholder}
        </p>
        <span
          className={`hidden lg:block absolute bottom-0 left-1/2 ${
            isSelected
              ? `${colors[color][0]} translate-y-[calc(50%-1px)] `
              : `${colors[color][0]}/15 -translate-y-4 `
          } -translate-x-1/2 w-6 h-6 rotate-45 transition-all duration-200`}
        ></span>
      </div>
    </div>
  );
};

export default DepartmentSelect;
