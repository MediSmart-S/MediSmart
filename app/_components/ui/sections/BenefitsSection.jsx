import AlarmBenefit from "../../svg/AlarmBenefit";
import DoctorBenefit from "../../svg/DoctorBenefit";
import PhoneBenefit from "../../svg/PhoneBenefit";

const BenefitItem = ({
  icon,
  title,
  className = "",
  containerClassName = "",
}) => {
  return (
    <div
      className={`flex flex-col items-center xl:items-start ${containerClassName}`}
    >
      <div
        className={`flex justify-center items-center w-20 h-20 rounded-full mb-4 ${className}`}
      >
        <span className="w-10 h-10">{icon}</span>
      </div>
      <h1 className="text-2xl font-semibold mb-2">{title}</h1>
      <p className="text-center xl:text-start text-neutral-500 max-w-96 text-pretty">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است
      </p>
    </div>
  );
};

const BenefitsSection = () => {
  return (
    <section className="container grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-0 my-24">
      <BenefitItem
        title="دکتران متخصص"
        icon={<DoctorBenefit />}
        className="bg-[#6758f324]"
      />
      <BenefitItem
        title="پشتیبانی 24 ساعته"
        icon={<PhoneBenefit />}
        className="bg-[#37af4724]"
      />
      <BenefitItem
        title="حتی اورژانسی"
        icon={<AlarmBenefit />}
        className="bg-[#e6492d24]"
        containerClassName="col-span-1 lg:col-span-2 xl:col-span-1"
      />
    </section>
  );
};

export default BenefitsSection;
