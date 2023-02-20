import Today from "./components/Today";
import Information from "./components/Information";
import Forecast from "./components/Forecast";
import { fullYear } from "./helpers/getTime";
import axios from "axios";
import { useState, useEffect } from "react";
import Logo from "./components/Logo";
import { API_CURR, API_DAILY } from "./constants/env";

function App() {
  const locationKey = "11222";
  const [weather, setWeather] = useState();
  const [daily, setDaily] = useState([]);
  const [minmax, setMinmax] = useState([]);

  const key = "WQpHvCLUpweCdgmUx2X2MyxvwypVAp80";

  // Obtener condiciones de hoy

  useEffect(() => {
    axios
      .get(
        `${API_CURR}/${locationKey}?apikey=${key}&language=es-ar&details=true`
      )
      .then((resp) => {
        setWeather(resp.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  // Obtener condiciones de los próximos 5 días

  useEffect(() => {
    axios
      .get(
        `${API_DAILY}/${locationKey}?apikey=${key}&language=es-ar&metric=true`
      )
      .then((resp) => {
        setDaily(resp.data.DailyForecasts.slice(1));
        setMinmax(resp.data.DailyForecasts.slice(0, 1));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container flex flex-col mx-auto pt-4 bg-slate-100">
      <header className="py-4">
        <div className="flex justify-between items-end text-slate-800">
          <Logo />
          <h4>Rosario, Argentina</h4>
        </div>
      </header>
      <div className="flex flex-col lg:flex-row lg:justify-between py-6 gap-y-4">
        {/* Sección izquirda (desktop) o sup (mobile) */}
        <div>
          <div className="flex flex-col items-left w-full pb-4">
            {/* Información del dia*/}
            <Information fullYear={fullYear} />
          </div>

          <div className="flex flex-col items-center w-full">
            {/* Temperatura actual */}
            <Today weather={weather} minmax={minmax} />
          </div>
        </div>
        {/* Sección derecha (desktop) o inf (mobile) */}
        <div className="flex gap-x-2 w-full overflow-scroll lg:overflow-auto lg:w-auto lg:pl-12">
          {/* Forecast 7 días */}
          {daily.map((day, i) => {
            return (
              <div key={i}>
                <Forecast day={day} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default App;
