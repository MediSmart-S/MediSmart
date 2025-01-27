"use client";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderNavigation from "./SliderNavigation";

import avatar2 from "@/public/images/avatars/avatar2.png";
import avatar3 from "@/public/images/avatars/avatar3.png";
import avatar4 from "@/public/images/avatars/avatar4.png";
import PeopleSayItem from "./PeopleSayItem";

const people = [
  {
    fullName: "مهدی اسدی",
    image: avatar2,
    job: "طراح",
  },
  {
    fullName: "فاطمه مهدوی",
    image: avatar3,
    job: "مدیر اجرایی",
  },
  {
    fullName: "علی عباسی",
    image: avatar4,
    job: "کد نویس",
  },
  {
    fullName: "مهدی اسدی",
    image: avatar2,
    job: "طراح",
  },
  {
    fullName: "فاطمه مهدوی",
    image: avatar3,
    job: "مدیر اجرایی",
  },
  {
    fullName: "علی عباسی",
    image: avatar4,
    job: "کد نویس",
  },
];

const PeopleSaySwiper = () => {
  return (
    <div className="container sm:block flex justify-center mb-16 mt-4">
      <div className="group/slider relative max-w-80 sm:max-w-none [&_.swiper]:!pt-5 [&_.swiper]:!px-5">
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
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          {people.map(({ fullName, image, job }, i) => (
            <SwiperSlide key={i}>
              <PeopleSayItem fullName={fullName} image={image} job={job} />
            </SwiperSlide>
          ))}

          <SliderNavigation />
        </Swiper>
      </div>
    </div>
  );
};

export default PeopleSaySwiper;
