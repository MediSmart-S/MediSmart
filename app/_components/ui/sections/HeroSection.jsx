import MiniAppointmentForm from "../MiniAppointmentForm";
import ButtonSecondary from "../ButtonSecondary";

const HeroSection = () => {
  return (
    <section className="bg-hero mt-4 bg-fixed bg-cover bg-center bg-no-repeat">
      <div className="container flex flex-col xl:flex-row justify-between items-center py-16 xl:py-36">
        <div className="flex xl:block flex-col items-center w-full xl:w-1/2 mb-8 xl:mb-0">
          <h1 className="w-3/4 xl:w-full text-center xl:text-start text-slate-800 font-bold text-4xl md:text-7xl leading-normal">
            ارائه دهنده بروز ترین خدمات پزشکی
          </h1>
          <p className="text-center xl:text-start text-neutral-500 text-xl mt-4 max-w-lg">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
          </p>
          <div className="mt-6">
            <ButtonSecondary>بخش های ما</ButtonSecondary>
          </div>
        </div>
        <div className="w-full xl:w-1/2 flex justify-center items-center">
          <MiniAppointmentForm />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
