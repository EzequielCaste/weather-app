import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { DailyForecast } from '../components/DailyForecast';
import { WeeklyForecast } from '../components/WeeklyForecast';
import { config } from 'dotenv';
config();

export const AppRouter = ({data}) => {    
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <div className="container">
      <Switch>      
        <Route exact path='/'>
          <WeeklyForecast data={data} />
        </Route> 
        <Route path='/:day' children={ <DailyForecast />} />          
      
      </Switch>
    </div>
    </Router>  
  ) 
}
