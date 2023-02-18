import { getToday, fullYear } from "../helpers/getTime";

const Information = () => {
  const getNow = () => {
    return new Date();
  };
  setInterval(getNow, 1000);

  const data = getToday(getNow());

  return (
    <section className="flex flex-col gap-y-1 text-slate-800">
      <h2 className="font-semibold text-xl">{fullYear.weekDays[data.day]}</h2>
      <p className="font-medium text-4xl">
        {String(data.hour).padStart(2, "0")} :{" "}
        {String(data.minutes).padStart(2, "0")}
      </p>
      <div>
        <p>{`${data.date} de ${fullYear.months[data.month]}, ${data.year}`}</p>
      </div>
    </section>
  );
};

export default Information;
