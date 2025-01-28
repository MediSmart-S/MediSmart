"use client";

import { ButtyCalendar } from "@laruz7476/react-butty-persian-calendar";
import Input from "./Input";

import { LuCalendar } from "react-icons/lu";
import Select from "./Select";
import Textarea from "./Textarea";
import Button from "./Button";
import { departmentOptions, doctorOptions } from "./AppointmentForm";

const MiniAppointmentForm = () => {
  const selectDate = (e) => {
    console.log(e);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="w-full max-w-none xl:max-w-md bg-white p-8 py-12 rounded-2xl"
    >
      <h1 className="text-center text-3xl font-medium">رزرو قرار ملاقات</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
        <div>
          <Input placeholder="نام کامل" />
        </div>
        <div>
          <Input placeholder="ایمیل" />
        </div>
        <div>
          <Input placeholder="شماره موبایل" />
        </div>
        <div className="calendar-container">
          <ButtyCalendar
            onChange={selectDate}
            icon={<LuCalendar />}
            options={{
              showType: "pretty",
            }}
          />
        </div>
        <div>
          <Select placeholder="انتخاب دکتر" options={doctorOptions} />
        </div>
        <div>
          <Select placeholder="انتخاب بخش درمانی" options={departmentOptions} />
        </div>
      </div>
      <div className="mt-4">
        <Textarea placeholder="چیزی بنویسید..." />
      </div>
      <div className="mt-4">
        <Button className="w-full">بررسی پزشکان موجود</Button>
      </div>
    </form>
  );
};

export default MiniAppointmentForm;
