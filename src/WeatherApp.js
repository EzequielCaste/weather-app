import React from 'react';
import { useState } from 'react';

import {data} from './data';
import { WeatherCard } from './WeatherCard';
import { WeatherDetails } from './WeatherDetails';

export const WeatherApp = () => {

  const [details, setDetails] = useState('');

  const changeDetails = (id) => {    
    setDetails(data.daily.filter( day => day.dt === id)[0]); 
  }

  return (
    <div className="container">
      <h3>Weather App</h3>
      <hr/>
      <div className="card-container">
        {
          data.daily.map( day => {            
            return <WeatherCard 
            key={day.dt} 
            data={day} 
            handleCardClick={() => changeDetails(day.dt)}
            />
          })
        }        
      </div>
      <hr/>
      <div className="details">
        {details&&<WeatherDetails data={details} />}
      </div>
    </div>
  )
}
