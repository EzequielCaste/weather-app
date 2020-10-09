import React from 'react';
import { Link } from 'react-router-dom';
import { config } from 'dotenv';
config();

export const WeatherCard = ({id, data}) => {
 
  const {min,max} = data.temp;
  const {icon} = data.weather[0];

  const day = new Date(data.dt*1000).toDateString().substring(0,3);

  const linkId = new Date(data.dt*1000).toISOString().substring(0,10);

  const style = {
    textDecoration: 'none',
    color: '#000'
  }

  const {humidity, pressure} = data;
  
  
  return (
    <>
    <Link style={style} to={`/${linkId}`}>
      <div className="card">
        <div className="title">{day}</div>      
        <div className="img-day">
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather"/>
        </div>
        <div className="temps">
          <p>Min: {Math.round(min)} °C</p>
          <p>Max: {Math.round(max)} °C</p>
          <p>Humidity: {humidity}%</p>
          <p>Pressure: {pressure}hPa</p>
        </div>
      </div>
    </Link>
    </>
  )
}
