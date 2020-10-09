import React from 'react';
import { Link, Redirect, useParams } from 'react-router-dom';
import { config } from 'dotenv';
import moment from 'moment';
config();

export const DailyForecast =  ({data}) => {  

  let { day } = useParams();     
  
  if ( !data ) {
    return (
      <div>Loading...</div>
    )   
  }

  const dataItem = data[1].list.filter( item => {    
   return item.dt_txt.substring(0,10) === day
  }
  );

  
  if ( !dataItem ) {
    return (
      <Redirect to='/' />
    )
  }
      
  const date = (dataItem[0].dt_txt.substring(0,10) );   

  return (
    <>
    <div className="weather-detail">
      <h4>{moment(date).format("LL")}</h4>
    
    { 
      dataItem.map( hourly => (

        <li key={hourly.dt}>{moment(hourly.dt_txt).format("LT")} <img src={`https://openweathermap.org/img/wn/${hourly.weather[0].icon}@2x.png`} alt="weather"/>{} {hourly.main.temp} °C</li>


      ))
    }
    <p>
      <Link to="/">
        Back
      </Link>
    </p>
    </div>
    </>
  )
}