export const fetchData = async( {latitude: lat, longitude: lon} ) => {

  // 5 DAYS!!!!
  //const url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=24d7eab231aa80194d6732c8effdded4`

  // Daily forecast for 7 days
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,alerts&appid=${process.env.REACT_APP_API_KEY}&units=metric`

  const resp = await fetch(url);
  const data = await resp.json();

  return data;
}

