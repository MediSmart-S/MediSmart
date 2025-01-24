import AppointmentForm from "../AppointmentForm";
import SectionHeader from "../SectionHeader";

const AppointmentSection = () => {
  return (
    <section>
      <SectionHeader
        title="رزرو قرار ملاقات"
        description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"
      />

      <div className="container">
        <AppointmentForm />
      </div>
    </section>
  );
};

export default AppointmentSection;
