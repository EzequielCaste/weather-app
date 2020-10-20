import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { DailyForecast } from '../components/DailyForecast';
import { WeeklyForecast } from '../components/WeeklyForecast';
import { config } from 'dotenv';
import { CurrentForecast } from '../components/CurrentForecast';
config();

export const AppRouter = ({data}) => {   
  
  data[0].daily.shift();
  data[0].daily.pop();
  data[0].daily.pop();

  return (
    <Router basename={process.env.PUBLIC_URL}>
    <div className="container">
      <Switch>      
        <Route exact path='/'>
          <WeeklyForecast data={data} />
          <CurrentForecast {...data} />
        </Route> 
        <Route path='/:day' children={ <DailyForecast data={data} />} />          
      
      </Switch>
    </div>
    </Router>  
  ) 
}
