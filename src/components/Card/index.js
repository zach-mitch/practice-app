import React from 'react';
import { Typography } from '@material-ui/core'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        display: 'grid',

    },
});

const Card = ({Heading1}) => {
    const classes = useStyles();
    return (
        <Box display="flex" justifyContent="center" >
        
            <Typography variant='h1'>
                {Heading1}
            </Typography>
      
        </Box>
    )
}

export default Card
