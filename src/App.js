import React, { useState } from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import MainDisp from './components/MainDisp';
import TopBar from './components/TopBar';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  paper1: {
    height: 140,
    width: 100,
  },
  paper2: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  contact: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  bigAvatar: {
    margin: 10,
    width: 240,
    height: 240,
  },
  socMediaIcon : {width: 60, height : 60},
  socMediaText : {marginTop: 120},
  para1: { backgroundColor: '#eeeeee', height: '240px', padding: '30px', border : '30px' , margin: '30px'}
}));



const App= () =>  {
  const classes = useStyles(0);
  let [disp, setDisp] = useState(1);
    return (
      <div>
        <TopBar setFunc={setDisp} style1={classes} />
        <MainDisp page={disp} style1={classes}/>  
      </div>
    );
}

export default App;


