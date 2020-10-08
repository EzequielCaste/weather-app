import React, { useEffect, useState } from 'react';

import { config } from 'dotenv';

import { AppRouter } from './router/AppRouter';
import { fetchData } from './helpers/fetchData';

config();

const getCoordinates = () => {
  return new Promise(function(resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

async function getAddress() {
  const position = await getCoordinates(); 
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude; 

  return {
    latitude,
    longitude
  };  
}


export const WeatherApp = () => {   

  const [data, setData] = useState('');

  useEffect(() => {    
    getAddress().then( (loc) => {     
      fetchData(loc).then( data => {
        setData(data);
      });
    })   
  }, [])

  return (
    <>
      <AppRouter data={data} />
    </>
  )
}
