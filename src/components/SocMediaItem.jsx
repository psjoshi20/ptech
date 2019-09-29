import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Icon from '@material-ui/core/Icon';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

const SocMediaItem2 = (props) => {
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
                    <a href={props.link1}> {props.txt1} </a>
            </Box>
        </Box>
    </Grid>

}
const SocMediaItem = (props) =>  {
    return <div className={props.style1.root2}>
            <Chip
                className={props.style1.chip}
                avatar={<Avatar className={props.style1.midAvatar} alt={props.srcalt1[1]} src={props.srcalt1[0]}></Avatar>}
                label={<a href={props.link1}> <h2> {props.txt1} </h2></a>}
            >        
            </Chip>
    </div>
}
export default SocMediaItem;