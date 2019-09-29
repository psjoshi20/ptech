import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

const ContactMe = (props) => {
    return    <Grid container maxWidth="md" direction="row">
                <Grid item xs={2}><Box m={2}>Hello World</Box></Grid>
                <Grid container direction="row">
                    <Grid item xs={10}>
                        <Icon>
                            <img alt="LinkedIn" src="../assets/linkedin-box.svg" onClick={() => alert("I am Linkedin Icon")}/>
                        </Icon>
                        <Typography component="span">LinkedIn</Typography>
                    </Grid>
                    <Grid item xs={10}>
                        <Icon>
                            <img alt="GitHub" src="../assets/github-circle.svg" onClick={() => alert("I am Linkedin Icon")}/>
                        </Icon>
                        <Typography component="span">GitHub</Typography>
                    </Grid>
                </Grid>
              </Grid>;

}

export default ContactMe;