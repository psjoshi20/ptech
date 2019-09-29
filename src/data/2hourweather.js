import { useState } from 'react';


export const useWeather = (xx1) => {
    const [weath, setWeath] = useState(null);
    if( ! weath ) { fetch("https://api.data.gov.sg/v1/environment/2-hour-weather-forecast")
                       .then(a1 => a1.json())
                       .then(a1 => { setWeath(a1)}); }
    return weath;
}

export default useWeather;