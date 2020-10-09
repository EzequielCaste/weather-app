export const fetchData = async( {latitude: lat, longitude: lon} ) => {

  let url = [
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,alerts&appid=${process.env.REACT_APP_API_KEY}&units=metric`,
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric` 
  ];
   
  const data = [];

  let resp = await fetch(url[0]); // ONECALL > WEEKLY
  let datos = await resp.json();
  data.push(datos);
  
  resp = await fetch(url[1]); // FORECAST > Hours
  datos = await resp.json();
  data.push(datos);
  

  // 5 DAYS!!!!
  //const url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`

  // Daily forecast for 7 days
  //const 

  

  return data;
}

