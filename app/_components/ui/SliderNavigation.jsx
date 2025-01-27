import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { useSwiper } from "swiper/react";

const SliderNavigation = () => {
  const swiper = useSwiper();

  const circleClassName =
    "hidden sm:flex justify-center items-center w-12 h-12 bg-white text-slate-800 text-lg -translate-y-full rounded-full opacity-0 group-hover/slider:opacity-100 shadow-lg transition-all duration-300 z-10";

  return (
    <>
      <button
        className={`absolute right-4 top-1/2 group-hover/slider:translate-x-0 translate-x-full ${circleClassName}`}
        onClick={() => swiper.slidePrev()}
      >
        <LuChevronRight className="w-6 h-6" />
      </button>
      <button
        className={`absolute left-4 top-1/2 group-hover/slider:translate-x-0 -translate-x-full ${circleClassName}`}
        onClick={() => swiper.slideNext()}
      >
        <LuChevronLeft className="w-6 h-6" />
      </button>
      <div className="relative flex justify-center items-center h-12">
        <div className="flex justify-center items-center gap-4 swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"></div>
      </div>
    </>
  );
};

export default SliderNavigation;
