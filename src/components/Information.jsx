import { getToday, fullYear } from "../helpers/getTime";

const Information = () => {
  const getNow = () => {
    return new Date();
  };
  setInterval(getNow, 1000);
  
  const data = getToday(getNow());

  return (
    <section className="section">
      <h2 className="font-bold">{fullYear.weekDays[data.day]}</h2>
      <p id="hour">
        {String(data.hour).padStart(2, "0")} :{" "}
        {String(data.minutes).padStart(2, "0")}
      </p>
      <div className="flex gap-x-2">
        <p>{`${data.day} de ${fullYear.months[data.month]}`}</p>
        <span>|</span>
        <p>Argentina, Rosario</p>
      </div>
    </section>
  );
};

export default Information;
