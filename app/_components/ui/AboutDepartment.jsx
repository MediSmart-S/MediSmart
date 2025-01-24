import { useEffect } from "react";
import Button from "./Button";
import { departments } from "./Departments";
import { colors } from "./DepartmentSelect";
import H1 from "./H1";
import Image from "next/image";

import crutches from "@/public/images/departments/crutches.png";
import cardiology from "@/public/images/departments/cardiology.png";
import dentalCare from "@/public/images/departments/dental-care.png";
import neurology from "@/public/images/departments/neurology.png";
import pulmonary from "@/public/images/departments/pulmonary.png";
import xray from "@/public/images/departments/xray.png";

const images = {
  crutches,
  cardiology,
  "dental-care": dentalCare,
  neurology,
  pulmonary,
  xray,
};

const AboutDepartment = ({ selection, selectDepartment }) => {
  const {
    color: departmentColor,
    placeholder,
    value,
  } = departments.find((item) => item.value === selection);
  const color = colors[departmentColor];

  return (
    <div className="container flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0 mt-12">
      <div className="w-full lg:w-1/2">
        <H1 className="mb-2">
          معرفی بخش <span className={color[3]}>{placeholder}</span>
        </H1>
        <p className="font-bold text-lg text-slate-800">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
        </p>
        <p className="text-lg text-neutral-500 my-8">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد
        </p>
        <Button>بیشتر بخوانید</Button>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <Image src={images[value]} alt={`بخش ${placeholder}`} />
      </div>
    </div>
  );
};

export default AboutDepartment;
