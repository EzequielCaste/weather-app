import React from 'react';

import { WeatherCard } from './WeatherCard';

export const WeeklyForecast = ({data}) => {  

  //console.log(data);

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




// dt_txt: "2020-10-08 21:00:00"

// new Date(1602259200*1000).toISOString()
// "2020-10-09T16:00:00.000Z"

