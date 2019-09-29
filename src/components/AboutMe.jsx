import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';


const AboutMe = (props) => {
    return    <Grid container direction="row" justify="center"   alignItems="center">
                <Grid item xs={3}>
                  <Avatar alt="About Me" src="../assets/pradnya.jpg" className={props.style1.bigAvatar} />
                </Grid>
                <Grid item xs={9}>
                        <Typography component="div" className={props.style1.para1} >
                        <p>Hello, I am Pradnya Joshi. </p>
                        <p>I am a Homemaker.My daily routine revolves around my family activities .I have an educational background in computer programming and fundamentals. Recently, I have started to learn again and refresh my knowledge in software Technologies in my free time. </p>
                        <p> I am actively looking ways to explore opportunities to learn and grow my knowledge. </p>

                        <p> I first came upon TechLadies website in my some search related web development . That piqued my curiosity to find out more on the TechLadies website. My takeaway impression from the site was that it was a great initiative that brings people together to explore their interest in technology and encourage sharing of their knowledge.</p>

                        <p> I was looking for an avenue to practice and learn web development skills . I searched may skill development courses offered in mySkillfuture. I chanced upon a videos on the TechLadies Bootcamps. The projects shared in the video looked interesting, and I liked how the programme provided the opportunity to learn directly from coaches and work with a group of fellow peers on a project.</p>

                        <p> I am really keen on getting into the programme I had spent quite a bit of time researching and watching YouTube videos to do up an application that is required as part of the bootcamp application..</p>

                        <p> I want to work on an app for an actual company with a real problem, I believe that the bootcamp can help me in Practical experience working on an actual app. I need a A structured program with clear objectives and an achievable goal and also I believe good coach and mentors with actual industry knowledge will help me through this.</p>
                        </Typography>
                </Grid>
              </Grid>;
}

export default AboutMe;
