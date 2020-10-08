import React from 'react';
import { Link } from 'react-router-dom';

export const WeatherCard = ({id, data}) => {
 
  const {min,max} = data.temp;
  const {icon} = data.weather[0];

  const day = new Date(data.dt*1000).toDateString().substring(0,3)

  const style = {
    textDecoration: 'none',
    color: '#000'
  }
  
  return (
    <>
    <Link style={style} to={`/weather-app/${id}`}>
      <div className="card">
        <div className="title">{day}</div>      
        <div className="img-day">
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather"/>
        </div>
        <div className="temps">
          <p className="min">Min: {min} °C</p>
          <p className="max">Max: {max} °C</p>
        </div>
      </div>
    </Link>
    </>
  )
}
