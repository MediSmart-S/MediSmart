import PhoneTimetable from "../svg/PhoneTimetable";

const days = [
  {
    day: "شنبه",
    from: "8:00",
    to: "7:00",
  },
  {
    day: "یکشنبه",
    from: "9:00",
    to: "3:00",
  },
  {
    day: "دوشنبه",
    from: "8:00",
    to: "7:00",
  },
  {
    day: "سه شنبه",
    from: "9:00",
    to: "6:00",
  },
  {
    day: "چهارشنبه",
    from: "9:00",
    to: "6:00",
  },
  {
    day: "پنجشنبه",
    from: "8:00",
    to: "7:00",
  },
  {
    day: "جمعه",
    from: "9:00",
    to: "5:00",
  },
];

const WeeklyTimetable = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-none lg:max-w-lg bg-slate-50 p-4">
        <div className="border border-primary-500 p-4">
          <h1 className="font-semibold text-3xl text-primary-500">
            جدول زمانی هفته
          </h1>
          <div className="mt-4">
            {days.map((item) => (
              <div
                key={item.day}
                className="flex justify-between items-end py-2 my-2 border-b border-neutral-400 border-dashed"
              >
                <p className="text-lg text-neutral-600">{item.day}</p>
                <p className="text-lg text-neutral-500">
                  {item.from}ق.ظ - {item.to}ب.ظ
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row justify-start items-center gap-4 py-4">
            <div>
              <span className="[&_svg]:fill-slate-800 [&_svg]:w-9 [&_svg]:h-9">
                <PhoneTimetable />
              </span>
            </div>
            <div className="text-center sm:text-start">
              <p className="text-neutral-500">حالا زنگ بزن</p>
              <p className="font-semibold text-2xl text-primary-500" dir="ltr">
                (+01) - 234 567 890
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyTimetable;
