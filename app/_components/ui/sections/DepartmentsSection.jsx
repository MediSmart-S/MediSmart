import SectionHeader from "../SectionHeader";
import DepartmentsContainer from "../DepartmentsContainer";

const DepartmentsSection = () => {
  return (
    <section>
      <SectionHeader
        title="بخش های درمانی ما"
        description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"
      />

      <DepartmentsContainer />
    </section>
  );
};

export default DepartmentsSection;
