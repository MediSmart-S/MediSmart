import SectionHeader from "../SectionHeader";
import SpecialistsSwiper from "../SpecialistsSwiper";
import Section from "./Section";

const SpecialistsSection = () => {
  return (
    <Section id="specialists-section">
      <SectionHeader
        title="با متخصصان ما آشنا شوید"
        description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"
        withDivider={false}
      />

      <SpecialistsSwiper />
    </Section>
  );
};

export default SpecialistsSection;
