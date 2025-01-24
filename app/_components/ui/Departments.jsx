import DepartmentSelect from "./DepartmentSelect";
import Cardiology from "../svg/departments/Cardiology";
import Crutches from "../svg/departments/Crutches";
import DentalCare from "../svg/departments/DentalCare";
import Neurology from "../svg/departments/Neurology";
import Pulmonary from "../svg/departments/Pulmonary";
import Xray from "../svg/departments/Xray";

export const departments = [
  {
    value: "crutches",
    placeholder: "شکستگی",
    Icon: Crutches,
    color: "cyan",
  },
  {
    value: "xray",
    placeholder: "اشعه ایکس",
    Icon: Xray,
    color: "red",
  },
  {
    value: "pulmonary",
    placeholder: "ریوی",
    Icon: Pulmonary,
    color: "green",
  },
  {
    value: "cardiology",
    placeholder: "قلبی",
    Icon: Cardiology,
    color: "blue",
  },
  {
    value: "dental-care",
    placeholder: "دندان",
    Icon: DentalCare,
    color: "amber",
  },
  {
    value: "neurology",
    placeholder: "اعصاب",
    Icon: Neurology,
    color: "neutral",
  },
];

const Departments = ({ selection, selectDepartment }) => {
  return (
    <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 my-8">
      {departments.map((department) => {
        const { value, Icon, color, placeholder } = department;
        return (
          <DepartmentSelect
            key={value}
            value={value}
            placeholder={placeholder}
            currentDepartment={selection}
            selectDepartment={selectDepartment}
            Icon={Icon}
            color={color}
          />
        );
      })}
    </div>
  );
};

export default Departments;
