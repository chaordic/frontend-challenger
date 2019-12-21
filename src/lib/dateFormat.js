const format = options => new Intl.DateTimeFormat("pt-BR", options);
const desc = {
  timeZone: "America/Sao_Paulo",
  day: "2-digit",
  month: "long",
  year: "numeric"
};
const hour = {
  timeZone: "America/Sao_Paulo",
  hour: "2-digit",
  minute: "2-digit"
};

export const simple = date => new Intl.DateTimeFormat("pt-BR").format(date);
export const full = date =>
  `${format(desc).format(date)}, às ${format(hour)
    .format(date)
    .replace(":", "h")}`;
export default (date, isFull) => {
  const method = isFull ? full : simple;
  return method(new Date(date));
};
