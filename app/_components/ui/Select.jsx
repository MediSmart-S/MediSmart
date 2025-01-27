"use client";

import { useEffect, useRef, useState } from "react";
import { LuChevronDown } from "react-icons/lu";

const Select = ({ options, placeholder, bigger = false }) => {
  const defaultValue = {
    placeholder: placeholder ?? "انتخاب کنید",
    value: null,
  };
  const [selected, setSelected] = useState(defaultValue);
  const [showOptions, setShowOptions] = useState(false);
  const ref = useRef();

  useEffect(() => {
    document.addEventListener(
      "click",
      (e) => {
        if (!ref.current.contains(e.target)) {
          setShowOptions(false);
        }
      },
      true
    );
  }, [setShowOptions]);

  const toggleOptions = () => {
    setShowOptions((b) => !b);
  };

  const selectOption = (placeholder, value) => {
    setSelected({ placeholder, value });
    setShowOptions(false);
  };

  return (
    <div className="relative" ref={ref}>
      <div
        className={`relative w-full ${
          bigger ? "px-4 py-2.5" : "px-3 py-1.5"
        } bg-white rounded-md outline-none border border-slate-300 hover:border-primary-500 focus:border-primary-500 cursor-pointer transition-all duration-300`}
        onClick={toggleOptions}
      >
        <span className="select-none text-lg">{selected.placeholder}</span>
        <span
          className={`absolute end-2 top-1/2 -translate-y-1/2 ${
            showOptions ? "rotate-180" : "rotate-0"
          } transition-all duration-200`}
        >
          <LuChevronDown />
        </span>
      </div>
      <div
        className={`absolute bottom-0 start-0 ${
          showOptions
            ? "translate-y-[calc(100%+4px)] opacity-100 visible"
            : "translate-y-full opacity-0 invisible"
        } w-full py-1.5 bg-white rounded-md outline-none border border-slate-300 divide-y will-change-transform transition-all duration-250 z-10`}
      >
        {options ? (
          options.map((item) => (
            <div
              key={item.value}
              className="px-3 py-1 bg-white hover:bg-slate-200 cursor-pointer select-none transition-all duration-200"
              onClick={() => selectOption(item.placeholder, item.value)}
            >
              {item.placeholder}
            </div>
          ))
        ) : (
          <p className="px-3 py-1 text-center text-sm text-red-600">
            چیزی برای نمایش وجود ندارد!
          </p>
        )}
      </div>
    </div>
  );
};

export default Select;
