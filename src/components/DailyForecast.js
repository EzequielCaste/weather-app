import React from 'react';
import { Link, Redirect, useParams } from 'react-router-dom';
import { config } from 'dotenv';
import moment from 'moment';
import { useEffect } from 'react';
import { useState } from 'react';
config();

async function getData() {

  const {latitude: lat, longitude: lon} = JSON.parse(localStorage.getItem('location'));

  const url =  `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;
  
  const resp = await fetch(url);
  const data = await resp.json();
  //console.log(data);
  return data;
}

export const DailyForecast =  () => {  

  const [data, setData] = useState('');
  
  let { day } = useParams();   
  
  useEffect(() => {   

    getData().then( data => {
      setData(data)
    })   
    
  }, [])  
  
  console.log(data);
  
  if ( !data ) {
    return (
      <div>Loading...</div>
    )
    // return (
    //   <Redirect to='/' />
    // )
  }

  const dataItem = data.list.filter( item => {
    //const itemDate = new Date(item.dt_txt*1000).toISOString().substring(0,10);    
    //console.log(item.dt_txt.substring(0,10), day);
   return item.dt_txt.substring(0,10) === day
  }
  );

  data.list.map( item => {
    //console.log(item);
  })

  console.log(dataItem);

  if ( !dataItem ) {
    return (
      <Redirect to='/' />
    )
  }
    
  //const {humidity, pressure, temp_min: min, temp_max: max} = dataItem.main;  

   //const {main,icon,description} = dataItem.weather[0];

  // //const date = new Date(dataItem.dt*1000).toDateString(); 
   const date = (dataItem[0].dt_txt.substring(0,10) );
   

  return (
    <>
    <div className="weather-detail">
      <h4>{moment(date).format("LL")}</h4>
    
    { 
      dataItem.map( hourly => (

        <li key={hourly.dt}>{moment(hourly.dt_txt).format("LT")} <img src={`http://openweathermap.org/img/wn/${hourly.weather[0].icon}@2x.png`} alt="weather"/>{} {hourly.main.temp} °C</li>


      ))
    }
    <p>
      <Link to="/">
        Back
      </Link>
    </p>
    </div>
    </>
  )
}



/*
<div className="weather-detail">
      <h4>{date}</h4>
      <p><strong>Forecast: </strong>{main} - {description}</p>
      <div className="img-detail">
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather"/>
      </div>
      <div className="temps-detail">
        <p><strong>Humidity:</strong> {humidity} % </p>
        <p><strong>Pressure:</strong> {pressure} hPa </p>
        <p><strong>Min:</strong> {min} °C </p>
        <p><strong>Max:</strong> {max} °C </p>
      </div>
    </div>
    <div className="backBtn">
      <Link to='/'>
        <button>Back</button>
      </Link>
    </div>

*/