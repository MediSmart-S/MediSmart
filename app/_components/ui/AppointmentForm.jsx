"use client";

import { ButtyCalendar } from "@laruz7476/react-butty-persian-calendar";
import Input from "./Input";

import { LuCalendar } from "react-icons/lu";
import Select from "./Select";
import Textarea from "./Textarea";
import Button from "./Button";

export const doctorOptions = [
  { placeholder: "دکتر علی", value: "1" },
  { placeholder: "دکتر محمد", value: "2" },
  { placeholder: "دکتر رضا", value: "3" },
  { placeholder: "دکتر نقی", value: "4" },
  { placeholder: "دکتر حسین", value: "5" },
  { placeholder: "دکتر مهدی", value: "6" },
];
export const departmentOptions = [
  { placeholder: "دندان", value: "1" },
  { placeholder: "اعصاب", value: "2" },
  { placeholder: "شکستگی", value: "3" },
  { placeholder: "قلبی", value: "4" },
  { placeholder: "ریوی", value: "5" },
  { placeholder: "اشعه ایکس", value: "6" },
];

const AppointmentForm = () => {
  const selectDate = (e) => {
    console.log(e);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="w-full max-w-6xl p-8 py-12"
    >
      <h1 className="text-center text-3xl font-medium">رزرو قرار ملاقات</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div>
          <Input
            id="name"
            label="نام کامل"
            placeholder="افشان داودی"
            bigger={true}
          />
        </div>
        <div>
          <Input
            id="email"
            label="ایمیل"
            placeholder="email@example.com"
            bigger={true}
          />
        </div>
        <div>
          <Input
            id="phone"
            label="شماره همراه"
            placeholder="09123456789"
            bigger={true}
          />
        </div>
        <div>
          <div className="flex justify-start items-end">
            <label className="font-semibold text-lg text-neutral-500 cursor-text">
              تاریخ
            </label>
          </div>
          <div className="calendar-container bigger">
            <ButtyCalendar
              onChange={selectDate}
              icon={<LuCalendar />}
              options={{
                showType: "pretty",
              }}
            />
          </div>
        </div>
        <div>
          <div className="flex justify-start items-end">
            <label className="font-semibold text-lg text-neutral-500 cursor-text">
              دکتر
            </label>
          </div>
          <Select
            bigger={true}
            placeholder="انتخاب دکتر"
            options={doctorOptions}
          />
        </div>
        <div>
          <div className="flex justify-start items-end">
            <label className="font-semibold text-lg text-neutral-500 cursor-text">
              بخش درمانی
            </label>
          </div>
          <Select
            bigger={true}
            placeholder="انتخاب بخش درمانی"
            options={departmentOptions}
          />
        </div>
      </div>
      <div className="mt-4">
        <div className="flex justify-start items-end">
          <label className="font-semibold text-lg text-neutral-500 cursor-text">
            پیام
          </label>
        </div>
        <Textarea placeholder="چیزی بنویسید..." />
      </div>
      <div className="mt-4">
        <Button>بررسی پزشکان موجود</Button>
      </div>
    </form>
  );
};

export default AppointmentForm;
