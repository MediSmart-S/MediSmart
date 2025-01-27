"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import SpecialistItem from "./SpecialistItem";

import doctor1 from "@/public/images/doctors/doctor1.jpg";
import doctor2 from "@/public/images/doctors/doctor2.jpg";
import doctor3 from "@/public/images/doctors/doctor3.jpg";
import doctor4 from "@/public/images/doctors/doctor4.jpg";
import { departments } from "./Departments";
import SliderNavigation from "./SliderNavigation";

const specialists = [
  {
    fullName: "دکتر علی محمدی",
    image: doctor1,
    department: departments[0].placeholder,
  },
  {
    fullName: "دکتر فاطمه رضایی",
    image: doctor2,
    department: departments[1].placeholder,
  },
  {
    fullName: "دکتر رضا محمدی",
    image: doctor3,
    department: departments[2].placeholder,
  },
  {
    fullName: "دکتر شبنم رضوی",
    image: doctor4,
    department: departments[3].placeholder,
  },
  {
    fullName: "دکتر علی محمدی",
    image: doctor1,
    department: departments[4].placeholder,
  },
  {
    fullName: "دکتر فاطمه رضایی",
    image: doctor2,
    department: departments[5].placeholder,
  },
  {
    fullName: "دکتر رضا محمدی",
    image: doctor3,
    department: departments[1].placeholder,
  },
  {
    fullName: "دکتر شبنم رضوی",
    image: doctor4,
    department: departments[2].placeholder,
  },
];

const SpecialistsSwiper = () => {
  return (
    <div className="container sm:block flex justify-center mb-16 mt-4">
      <div className="group/slider relative max-w-80 sm:max-w-none">
        <Swiper
          modules={[Pagination]}
          spaceBetween={32}
          slidesPerView={1}
          pagination={{
            clickable: true,
            bulletActiveClass: "active-bullet",
            el: ".swiper-pagination",
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1282: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          {specialists.map(({ fullName, image, department }, i) => (
            <SwiperSlide key={i}>
              <SpecialistItem
                fullName={fullName}
                department={department}
                image={image}
              />
            </SwiperSlide>
          ))}

          <SliderNavigation />
        </Swiper>
      </div>
    </div>
  );
};

export default SpecialistsSwiper;
