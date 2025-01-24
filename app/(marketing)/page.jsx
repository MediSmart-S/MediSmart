import AboutSection from "../_components/ui/sections/AboutSection";
import AppointmentSection from "../_components/ui/sections/AppointmentSection";
import BenefitsSection from "../_components/ui/sections/BenefitsSection";
import DepartmentsSection from "../_components/ui/sections/DepartmentsSection";
import HeroSection from "../_components/ui/sections/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <BenefitsSection />
      <AboutSection />
      <DepartmentsSection />
      <AppointmentSection />
    </div>
  );
}
