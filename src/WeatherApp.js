import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { DailyForecast } from './components/DailyForecast';
import { WeeklyForecast } from './components/WeeklyForecast';

export const WeatherApp = () => {

  return (
    <Router>
    <div className="container">
      <Switch>
        <Route exact path="/" component={WeeklyForecast} />
        <Route path="/:day" component={DailyForecast} />
      </Switch>
    </div>
    </Router>      
  )
}
