import React from 'react';
import { Link, Redirect, useParams } from 'react-router-dom';
import { config } from 'dotenv';
config();

export const DailyForecast =  ({data}) => {   

  let { day } = useParams();   

  const dataItem = data.daily.filter( item => item.dt === Number(day))[0];

  if ( !dataItem ) {
    return (
      <Redirect to='/' />
    )
  }
    
  const {humidity, pressure} = dataItem;
  const {min,max} = dataItem.temp;
  const {main,icon,description} = dataItem.weather[0];
  const date = new Date(dataItem.dt*1000).toDateString(); 

  return (
    <>
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
    </>
  )
}
