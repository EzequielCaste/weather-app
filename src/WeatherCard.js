import React from 'react';

export const WeatherCard = ({data, handleCardClick}) => {
 
  const {min,max} = data.temp;
  const {main,icon} = data.weather[0];

  const day = new Date(data.dt*1000).toDateString().substring(0,3)
  const date = new Date(1602612000*1000).toLocaleDateString();
  
  return (
    <div onClick={handleCardClick} className="card">
      <div className="title">{day}</div>      
      <div className="img-day">
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather"/>
      </div>
      <div className="temps">
        <p className="min">Min: {min} </p>
        <p className="max">Max: {max} </p>
      </div>
    </div>
  )
}
