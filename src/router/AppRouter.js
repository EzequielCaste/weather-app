import React from 'react'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { DailyForecast } from '../components/DailyForecast';
import { WeeklyForecast } from '../components/WeeklyForecast';
import { config } from 'dotenv';
config();

export const AppRouter = ({data}) => {    
  return (
    <Router>
    <div className="container">
      <Switch>      
        <Route exact path={process.env.PUBLIC_URL + '/'}>
          <WeeklyForecast data={data} />
        </Route> 
        <Route path={process.env.PUBLIC_URL + '/:day'} children={ <DailyForecast data={data} />} />          
      
      </Switch>
    </div>
    </Router>  
  ) 
}
