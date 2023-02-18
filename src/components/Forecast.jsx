import { getToday, fullYear } from "../helpers/getTime";

const Forecast = ({ day }) => {
  // .toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})
  //const dayformat = (day?.Date).split("T")[0];
  const dateFormat = getToday(new Date(day?.Date))
  console.log(dateFormat)
  
  return (
    <section className="section">
      <article>
        <div>
          <h4>{fullYear.weekDays[dateFormat.day]}</h4>
          <p>{`${dateFormat.date} de ${fullYear.months[dateFormat.month]}`}</p>
        </div>
        <div>
          <img
            src={`https://developer.accuweather.com/sites/default/files/${String(
              day?.Day.Icon
            ).padStart(2, "0")}-s.png`}
            alt="weathericon"
          />
          <p>{day?.Day.IconPhrase}</p>

        </div>
        <div>
          <div>
            <p>Mínima</p>
            <span>{day?.Temperature.Minimum.Value} Cº</span>
          </div>
          <div>
            <p>Máxima</p>
            <span>{day?.Temperature.Maximum.Value} Cº</span>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Forecast;
