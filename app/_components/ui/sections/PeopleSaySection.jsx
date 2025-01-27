import PeopleSaySwiper from "../PeopleSaySwiper";
import SectionHeader from "../SectionHeader";

const PeopleSaySection = () => {
  return (
    <section>
      <SectionHeader
        title="نظر ارزشمند دیگران"
        description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"
        withDivider={false}
      />

      <PeopleSaySwiper />
    </section>
  );
};

export default PeopleSaySection;
