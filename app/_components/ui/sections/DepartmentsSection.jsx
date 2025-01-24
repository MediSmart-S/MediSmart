"use client";

import { useState } from "react";
import SectionHeader from "../SectionHeader";
import Departments from "../Departments";
import AboutDepartment from "../AboutDepartment";

const DepartmentsSection = () => {
  const [selection, setSelection] = useState("crutches");

  const selectDepartment = (department) => {
    setSelection(department);
  };

  return (
    <section>
      <SectionHeader
        title="بخش های درمانی ما"
        description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"
      />

      <div className="mb-16">
        <Departments
          selection={selection}
          selectDepartment={selectDepartment}
        />
        <AboutDepartment
          selection={selection}
          selectDepartment={selectDepartment}
        />
      </div>
    </section>
  );
};

export default DepartmentsSection;
