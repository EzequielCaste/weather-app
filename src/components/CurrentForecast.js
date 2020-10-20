import React from 'react'

export const CurrentForecast = (props) => {
  const hours = props[0].hourly;

  const showHourly = () => {
    document.querySelector('.current-card').classList.toggle('is-active');
  }

  return (
    <div className="current-forecast">
      <h2 onClick={ showHourly }>Hourly Forecast</h2>
      <div className="current-card is-active">
        {
          hours.map( hour => {

          const time = new Date(hour.dt*1000).toTimeString().substring(0,5)  
          
          return <li key={hour.dt}>
          {time} 
          <img alt="" src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`} />
          {hour.temp} °C
          </li>
          
          })
        }
      </div>

    </div>
  )
}
