import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

const SocMediaItem = (props) => {
    return <Grid item xs={10}>
        <Box display="flex" flexDirection="row">
            <Box className={props.style1.socMediaIcon}> </Box>
            <Box>
                <Icon>
                    <img className={props.style1.socMediaIcon} alt={props.srcalt1[1]} src={props.srcalt1[0]} onClick={() => alert("I am Linkedin Icon")}/>
                </Icon>
            </Box>
            <Box className={props.style1.socMediaIcon}> </Box>
            <Box>
                <Typography className={props.style1.socMediaText} component="span" variant="h4"> 
                    <a href={props.link1}> {props.txt1} </a>
                </Typography>
            </Box>
        </Box>
    </Grid>

}


const ContactMe = (props) => {
    return    <Grid container maxWidth="md" direction="row">
                <Grid container direction="row">
                    <SocMediaItem srcalt1={["../assets/linkedin-box.svg", "LinkedIn"]} txt1="LinkedIn" link1="https://www.linkedin.com/in/pradnya-shrikant-joshi-36684138" style1={props.style1}/>
                    <SocMediaItem srcalt1={["../assets/github-circle.svg", "GitHub"]} txt1="GitHub" link1="https://github.com/psjoshi20/ptech" style1={props.style1}/>
                </Grid>
              </Grid>;

}

export default ContactMe;