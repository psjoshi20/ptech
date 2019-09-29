import React from 'react';
import Grid from '@material-ui/core/Grid';
import SocMediaItem from './SocMediaItem';



const ContactMe = (props) => {
    return    <Grid container maxWidth="md" direction="row">
                <Grid container direction="row">
                    <SocMediaItem srcalt1={["../assets/linkedin-box.svg", "LinkedIn"]} txt1="LinkedIn" link1="https://www.linkedin.com/in/pradnya-shrikant-joshi-36684138" style1={props.style1}/>
                    <SocMediaItem srcalt1={["../assets/github-circle.svg", "GitHub"]} txt1="GitHub" link1="https://github.com/psjoshi20/ptech" style1={props.style1}/>
                </Grid>
              </Grid>;

}

export default ContactMe;