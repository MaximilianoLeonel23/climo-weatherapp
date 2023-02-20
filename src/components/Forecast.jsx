import { getToday, fullYear } from "../helpers/getTime";

const Forecast = ({ day }) => {
  const dateFormat = getToday(new Date(day?.Date));

  return (
    <section className="section text-slate-800 h-72">
      <article className="min-w-40 lg:w-full">
        <div>
          <h4 className="font-bold text-lg">
            {fullYear.weekDays[dateFormat.day]}
          </h4>
          <p>{`${dateFormat.date} de ${fullYear.months[dateFormat.month]}`}</p>
        </div>
        <div className="flex flex-col items-center text-center py-4 border-b border-slate-300">
          <img
            src={`https://developer.accuweather.com/sites/default/files/${String(
              day?.Day.Icon
            ).padStart(2, "0")}-s.png`}
            alt="weathericon"
          />
          <p className="font-medium">{day?.Day.IconPhrase}</p>
        </div>
        <div className="flex justify-between pt-2">
          <div className="flex flex-col items-center">
            <p className="font-medium">Mínima</p>
            <span>{day?.Temperature.Minimum.Value} Cº</span>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-medium">Máxima</p>
            <span>{day?.Temperature.Maximum.Value} Cº</span>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Forecast;
