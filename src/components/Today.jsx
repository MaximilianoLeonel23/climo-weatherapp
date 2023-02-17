const Today = ({ weather }) => {

  console.log(weather)
  return (
    <section className="section">
      <h1>{weather?.Temperature.Metric.Value} Cº</h1>
      <div>
        <img
          src={`https://developer.accuweather.com/sites/default/files/${String(
            weather?.WeatherIcon
          ).padStart(2, "0")}-s.png`}
          alt="weathericon"
        />
      </div>
      <p>{weather?.WeatherText}</p>
      {/* Detalles del clima */}
      <div>
        <p>
          Humedad: {weather?.RelativeHumidity} %
        </p>
        <p>
          Precipitaciones: {weather?.PrecipitationSummary.Precipitation.Metric.Value} mm.
        </p>
        <p>
          Viento: a {weather?.Wind.Speed.Metric.Value} km/h
        </p>
      </div>
    </section>
  );
};

export default Today;
