import React from 'react';

import { WeatherCard } from './WeatherCard';

export const WeeklyForecast = ({data}) => {  

  return (
    <>
      <h1>WeeklyForecast</h1>
      <hr/>
      <div className="card-container">
        {
          data&&data.daily.map( day => {            
            return <WeatherCard 
            id={day.dt}
            key={day.dt} 
            data={day}             
            />
          })
        }        
      </div>      
    </>
  )
}
