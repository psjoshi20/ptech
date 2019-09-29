import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';


const TopBar = (props) => {
    return <AppBar position="static">
        <Toolbar>
        <IconButton edge="start" className={props.style1.menuButton} color="inherit" aria-label="menu">
        </IconButton>
        <Typography variant="h6" className={props.style1.title}>
            Pradnya's Home Page
        </Typography>
        <Button color="inherit" onClick={() => props.setFunc(1)}>About Me</Button>
        <Button color="inherit" onClick={() => props.setFunc(2)}>Contact Me</Button>
        <Button color="inherit" onClick={() => props.setFunc(3)}>Regions</Button>
        <Button color="inherit" onClick={() => props.setFunc(4)}>Weather</Button>
        </Toolbar>
  </AppBar>;

}

export default TopBar;