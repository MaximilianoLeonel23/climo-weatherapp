const Today = ({ weather, minmax }) => {
  const minMax = minmax[0]?.Temperature;

  return (
    <section className="section text-slate-800 lg:w-101">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-semibold">
            {weather?.Temperature.Metric.Value} Cº
          </h1>
          <p>{weather?.WeatherText}</p>
        </div>
        <div>
          <img
            src={`https://developer.accuweather.com/sites/default/files/${String(
              weather?.WeatherIcon
            ).padStart(2, "0")}-s.png`}
            alt="weathericon"
          />
        </div>
      </div>
      <div className="flex gap-x-4 py-2 border-b border-slate-300">
        <h3 className="font-medium text-lg">
          Mínima: {minMax?.Minimum.Value} Cº
        </h3>
        <h3 className="font-medium text-lg">
          Máxima: {minMax?.Maximum.Value} Cº
        </h3>
      </div>
      {/* Detalles del clima */}
      <div className="pt-4">
        <p>Humedad: {weather?.RelativeHumidity} %</p>
        <p>
          Precipitaciones:{" "}
          {weather?.PrecipitationSummary.Precipitation.Metric.Value} mm.
        </p>
        <p>Viento: a {weather?.Wind.Speed.Metric.Value} km/h</p>
      </div>
    </section>
  );
};

export default Today;
