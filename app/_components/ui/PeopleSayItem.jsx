import Image from "next/image";
import StartQuote from "../svg/StartQuote";

const PeopleSayItem = ({ fullName, image, job }) => {
  return (
    <div className="group/person relative border border-neutral-200 rounded-lg px-4 py-8 shadow-card shadow-transparent hover:shadow-neutral-200 transition-all duration-200">
      <span className="absolute -top-2 -left-2 w-12 h-12 text-xl text-neutral-200 group-hover/person:text-primary-400 rotate-180 transition-all duration-200">
        <StartQuote className="w-12 h-12" />
      </span>

      <div className="flex justify-center items-center">
        <Image src={image} alt={fullName} />
      </div>
      <div className="text-center mt-2">
        <h4 className="font-semibold text-xl group-hover/person:text-primary-400 transition-colors duration-200">
          {fullName}
        </h4>
        <p className="text-neutral-500">{job}</p>
        <p className="text-neutral-500 mt-4">
          لورم ایپسوم به سادگی متن ساختگی صنعت چاپ و حروفچینی است. لورم ایپسوم
          متن ساختگی استاندارد صنعت.
        </p>
      </div>
    </div>
  );
};

export default PeopleSayItem;
