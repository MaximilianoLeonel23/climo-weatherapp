export const fullYear = {
  weekDays: [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ],
  months: [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
};

export const getToday = (today) => {
  const todayTime = {
    day: today.getDay(),
    hour: today.getHours(),
    minutes: today.getMinutes(),
    date: today.getDate(),
    month: today.getMonth(),
    year: today.getFullYear(),
  };
  return todayTime;
};
