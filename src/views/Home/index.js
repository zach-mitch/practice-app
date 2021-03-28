import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

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

    return (
        <>
            <Header />
            <Box justifyContent="center" className={classes.root} >
                <Button>Test</Button>
            </Box>
            <Footer />
        </>
    );
}
export default Business;
