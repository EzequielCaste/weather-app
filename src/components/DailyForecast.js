import React from 'react';
import { Link } from 'react-router-dom';

import {data} from '../data';

export const DailyForecast = ({ match }) => {

  const dataItem = data.daily.filter( day => day.dt == match.params.day)[0];

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
        <p><strong>Humidity:</strong> {dataItem.humidity} % </p>
        <p><strong>Pressure:</strong> {dataItem.pressure} hPa </p>
        <p><strong>Min:</strong> {min} °F </p>
        <p><strong>Max:</strong> {max} °F </p>
      </div>
    </div>
    <Link to="/">
      <button>Back</button>
    </Link>
    </>
  )
}
