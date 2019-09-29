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
        console.log("In Regions");
        comp1 =  <Regions/>;
    } else { 
      comp1 = <Weather/>;
    }
    return  comp1;
   }
export default MainDisp;

// const mydata = {name : "Pradnya", rollno : 320, city : "Sangli"}
// mydata.name

// const arr1 = ["Pradnya", "Rahul", "Mau"]
// arr1[1]

// myComp1 = [{name : "Pradnya", rollno : 320}, { name : "Rahul", rollno : 321}, {name : "Mau", rollno : 450, friends : ["pannag"]}]
// myComp1[3]["rollno"][0]

