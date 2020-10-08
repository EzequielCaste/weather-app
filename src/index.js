import React from 'react';
import ReactDOM from 'react-dom'
import { WeatherApp } from './WeatherApp';
import './styles.css'

ReactDOM.render(
  <React.StrictMode>
    <WeatherApp />
  </React.StrictMode>, document.querySelector('#root'));