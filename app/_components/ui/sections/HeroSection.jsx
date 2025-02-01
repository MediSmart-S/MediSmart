import HeroSectionContent from "../HeroSectionContent";
import MiniAppointmentForm from "../MiniAppointmentForm";
import Section from "./Section";

const HeroSection = () => {
  return (
    <Section
      id="hero-section"
      stopInit={false}
      className="bg-hero bg-fixed bg-cover bg-center bg-no-repeat"
    >
      <div className="container flex flex-col xl:flex-row justify-between items-center py-16 xl:py-36">
        <HeroSectionContent />
        <div className="w-full xl:w-1/2 flex justify-center items-center">
          <MiniAppointmentForm />
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
