import React from 'react';
import Box from '@material-ui/core/Box';
import SocMediaItem from './SocMediaItem';



const ContactMe = (props) => {
    return    <Box component="div" >
                    <SocMediaItem srcalt1={["../assets/linkedin-box.svg", "LinkedIn"]} txt1="LinkedIn" link1="https://www.linkedin.com/in/PradnyaSJoshi" style1={props.style1}/>
                    <SocMediaItem srcalt1={["../assets/github-circle.svg", "GitHub"]} txt1="GitHub" link1="https://github.com/psjoshi20/ptech" style1={props.style1}/>
              </Box>;
}

export default ContactMe;