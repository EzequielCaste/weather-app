export const fetchData = async({latitude: lat, longitude: lon}) => {

  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,current,minutely,alerts&appid=${process.env.REACT_APP_API_KEY}&units=metric`

  const resp = await fetch(url);
  const data = await resp.json();

  return data;
}