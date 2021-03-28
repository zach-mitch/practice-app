import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { Header } from '../../components/Layout/Header'
import { Footer } from '../../components/Layout/Footer'


const useStyles = makeStyles(theme => ({
    root: {
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(4),
        },
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(1),
        }
    }
}));

const Business = () => {
    const classes = useStyles();
    const [view, setView] = useState('false');

    return (
        <>
            <Header />
            <Box justifyContent="center" className={classes.root} >
                {view === ('false') &&
                    <Button variant="contained" color="primary" onClick={() => setView('true')}>Open</Button>
                }
                {view === ('true') &&
                    <>
                        <Button onClick={() => setView('false')}>Close X</Button>
                        <Typography>Test</Typography>
                    </>
                }
                <Typography>
                    testing
                </Typography>
            </Box>
            <Footer />
        </>
    );
}
export default Business;