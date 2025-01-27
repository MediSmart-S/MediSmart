"use client";

import { useState } from "react";
import Departments from "./Departments";
import AboutDepartment from "./AboutDepartment";

const DepartmentsContainer = () => {
  const [selection, setSelection] = useState("crutches");

  const selectDepartment = (department) => {
    setSelection(department);
  };

  return (
    <div className="mb-16">
      <Departments selection={selection} selectDepartment={selectDepartment} />
      <AboutDepartment
        selection={selection}
        selectDepartment={selectDepartment}
      />
    </div>
  );
};

export default DepartmentsContainer;
