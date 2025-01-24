import Image from "next/image";
import H1 from "../H1";

import avatar1 from "@/public/images/avatars/avatar1.png";
import WeeklyTimetable from "../WeeklyTimetable";

const AboutSection = () => {
  return (
    <section className="container flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0 pb-24">
      <div className="w-full lg:w-7/12">
        <H1>
          بیمارستان یک مؤسسه مراقبت بهداشتی است که خدمات درمانی بیمار را با
          پزشکی تخصصی ارائه می دهد
        </H1>
        <p className="text-lg text-neutral-500 my-8">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد
        </p>
        <p className="text-lg text-neutral-500 my-8">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد
        </p>
        <div className="flex justify-start items-center gap-4">
          <div>
            <Image src={avatar1} alt="avatar 1" />
          </div>
          <div>
            <p className="font-semibold text-2xl text-primary-300">رضا محمدی</p>
            <p className="text-neutral-500">مدیر و موسس</p>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-5/12">
        <WeeklyTimetable />
      </div>
    </section>
  );
};

export default AboutSection;
