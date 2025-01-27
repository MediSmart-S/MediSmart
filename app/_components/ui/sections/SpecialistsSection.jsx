import SectionHeader from "../SectionHeader";
import SpecialistsSwiper from "../SpecialistsSwiper";

const SpecialistsSection = () => {
  return (
    <section>
      <SectionHeader
        title="با متخصصان ما آشنا شوید"
        description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"
        withDivider={false}
      />

      <SpecialistsSwiper />
    </section>
  );
};

export default SpecialistsSection;
