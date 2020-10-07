import React from 'react'
import {data} from '../data';
import { WeatherCard } from './WeatherCard';

export const WeeklyForecast = () => {
  return (
    <div className="container">
      <h1>WeeklyForecast</h1>
      <hr/>
      <div className="card-container">
        {
          data.daily.map( day => {            
            return <WeatherCard 
            id={day.dt}
            key={day.dt} 
            data={day}             
            />
          })
        }        
      </div>
      
    </div>
  )
}
