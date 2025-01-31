import PeopleSaySwiper from "../PeopleSaySwiper";
import SectionHeader from "../SectionHeader";
import Section from "./Section";

const PeopleSaySection = () => {
  return (
    <Section id="patients-section">
      <SectionHeader
        title="نظر ارزشمند بیماران"
        description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"
        withDivider={false}
      />

      <PeopleSaySwiper />
    </Section>
  );
};

export default PeopleSaySection;
