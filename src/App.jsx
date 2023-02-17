import Today from "./components/Today";
import Information from "./components/Information";
import Forecast from "./components/Forecast";
import { fullYear } from "./helpers/getTime";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const key = "WQpHvCLUpweCdgmUx2X2MyxvwypVAp80";
  const locationKey = "11222";
  const [weather, setWeather] = useState();
  useEffect(() => {
    axios
      .get(
        `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${key}&language=es-ar&details=true`
      )
      .then((resp) => {
        setWeather(resp.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-slate-100">
      <div className="container flex flex-col lg:flex-row items-center">
        {/* Sección izquirda (desktop) o sup (mobile) */}
        <div className="flex flex-col items-center">
          {/* Información del dia*/}
          <Information fullYear={fullYear} />
          {/* Temperatura actual */}
          <Today weather={weather} />
        </div>
        {/* Sección derecha (desktop) o inf (mobile) */}
        <div>
          {/* Forecast 7 días */}
          <Forecast />
        </div>
      </div>
    </div>
  );
}
export default App;
