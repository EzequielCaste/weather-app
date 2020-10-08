import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { DailyForecast } from '../components/DailyForecast';
import { WeeklyForecast } from '../components/WeeklyForecast';


export const AppRouter = ({data}) => {
  return (
    <Router>
    <div className="container">
      <Switch>
        <Route exact path="/">
          <WeeklyForecast data={data} />
        </Route> 
        <Route path="/:day" render={(props) => <DailyForecast data={data} {...props} />} />
          
      </Switch>
    </div>
    </Router>  
  )
}
