import React from 'react'

export const WeatherDetails = ({data}) => {
  console.log(data);
  const {min,max} = data.temp;
  const {main,icon,description} = data.weather[0];

  const date = new Date(data.dt*1000).toDateString()
  return (
    <div className="weather-detail">
      <h4>{date}</h4>
      <p><strong>Forecast: </strong>{main} - {description}</p>
      <div className="img-detail">
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather"/>
      </div>
      <div className="temps-detail">
        <p><strong>Humidity:</strong> {data.humidity} % </p>
        <p><strong>Pressure:</strong> {data.pressure} hPa </p>
        <p><strong>Min:</strong> {min} °F </p>
        <p><strong>Max:</strong> {max} °F </p>
      </div>
    </div>
  )
}
