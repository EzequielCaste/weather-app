import React, { useEffect, useState } from 'react';

import { AppRouter } from './router/AppRouter';
import { fetchData } from './helpers/fetchData';

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
      try {
        localStorage.setItem('location', JSON.stringify(loc));
      } catch (error) {
        console.log(error);
      }   
      fetchData(loc).then( data => {        
        setData(data);
      });
    })   
  }, []);

  return (
    <>
      {data&&<AppRouter data={data} /> }
    </>
  )
}
