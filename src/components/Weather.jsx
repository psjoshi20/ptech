import React from 'react';

import getWeatherData, { useWeather }  from '../data/2hourweather';



export const Regions = () => {
    // const reg1 = getWeatherData();
    const weath1 = useWeather(null);
    return  <div>
        <h2> Singapore Region Coordinates Latitude/Longitude </h2>
        <ul> 
          {weath1 ? weath1.area_metadata.map(
                  r1 => 
                     (<li key={r1.name}> 
                         {r1.name} at    {r1.label_location.latitude}/{r1.label_location.longitude}
                       </li>))  
             : "Loading region data ..."}; 
        </ul>
        </div>;
}
const Weather = () => {
    const weath1 = useWeather(null);
    return <div>
        <h2> Singapore Weather </h2>
        <ul> 
            {weath1 ? weath1.items[0].forecasts.map(
                    r1 => 
                        (<li key={r1.area}> 
                             {r1.area} will be {r1.forecast} 
                        </li>))  : "Loading weather data ..."
            }
        </ul>
        </div>;
}

export default Weather;