import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';

const message1 = "About  Me";

const AboutMe = (props) => {
    return    <Grid container direction="row" justify="center"   alignItems="center">
                <Grid item xs={3}>
                  <Avatar alt="About Me" src="../assets/pradnya.jpg" className={props.style1.bigAvatar} />
                </Grid>
                <Grid item xs={9}>
                    <Paper>
                        <Typography component="div" style={{ backgroundColor: '#eeeeee', height: '240px', padding: '30px', border : '30px' }} >
                            Before I found out about this community, I felt really alone – all my female peers from school have left the industry. I didn’t know where to go to further develop my technical skills or bounce ideas with. So I was delighted when I came across a TechLadies ad on Facebook! It’s amazing to see that there is a community of women, people just like me, who are in the tech industry and are open to learning new technologies.ver the past 2 years I had been trying to build competency through online courses and workshops, but was always aware that building an application involved much more than just knowing how to write code – equally important are the design process, working in a team, and project management element that simply cannot be taught online
                        </Typography>
                    </Paper>
                </Grid>
              </Grid>;
}

export default AboutMe;
