import { useState, useEffect } from "react";
import axios from "axios";

const key = "WQpHvCLUpweCdgmUx2X2MyxvwypVAp80";
const locationKey = "11222";

export const getCurrent = (endpoint, unrequired) => {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get(
        `http://dataservice.accuweather.com/${endpoint}/${locationKey}?apikey=${key}&language=es-ar${unrequired.map((el) => {
            return el
        })}`
      )
      .then((resp) => {
        setData(resp.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  return [data]
};
