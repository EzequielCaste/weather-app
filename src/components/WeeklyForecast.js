import React from 'react';

import { WeatherCard } from './WeatherCard';

export const WeeklyForecast = ({data}) => {    

  const regex = /\w*$/gm;
  const str = data[0].timezone;
  const area = regex.exec(str)[0];  

  return (
    <>
      <h1>WeeklyForecast for {area}</h1>
      <hr/>
      <div className="card-container">
        {
          data&&data[0].daily.map( day => {                       
            return <WeatherCard             
            key={day.dt} 
            data={day}             
            />
          })
        }        
      </div>      
    </>
  )
}