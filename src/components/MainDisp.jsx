import React from 'react';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import Weather, { Regions } from './Weather';

const MainDisp = (props) => {
    let comp1 = "";
    if( props.page === 1 ) { 
        comp1 =  <AboutMe style1={props.style1}/>;
    } else if ( props.page === 2) {
     comp1 =  <ContactMe style1={props.style1}/>;
    } else if ( props.page === 3) {
        comp1 =  <Regions/>;
    } else { 
      comp1 = <Weather/>;
    }
    return  comp1;
   }
export default MainDisp;
