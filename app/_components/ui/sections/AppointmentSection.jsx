import Image from "next/image";
import AppointmentForm from "../AppointmentForm";
import SectionHeader from "../SectionHeader";

import footerImage from "@/public/images/shapes/section_shape.png";
import headImage from "@/public/images/shapes/contact-shape3.svg";
import Section from "./Section";

const AppointmentSection = () => {
  return (
    <Section id="appointment-section" className="relative bg-slate-50">
      <div className="relative z-10">
        <SectionHeader
          title="رزرو قرار ملاقات"
          description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"
          withDivider={false}
        />
      </div>

      <span className="absolute top-0 right-0">
        <Image src={headImage} alt="عکس" />
      </span>
      <span className="absolute bottom-0 left-0">
        <Image src={footerImage} alt="عکس موج سفید" />
      </span>

      <div className="container flex justify-center relative">
        <AppointmentForm />
      </div>
    </Section>
  );
};

export default AppointmentSection;
