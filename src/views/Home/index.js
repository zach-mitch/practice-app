import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import { Home } from '../../components/Icons/Home';

import { Header } from '../../components/Layout/Header'
import { Footer } from '../../components/Layout/Footer'
import Card from '../../components/Card'


const useStyles = makeStyles(theme => ({
    root: {
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(4),
        },
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(1),
        }
    },
    icon: {
        color: theme.palette.secondary.main
    }
}));

const Business = () => {
    const classes = useStyles();
    const [view, setView] = useState('false');
    const [more, setMore] = useState('1');

    return (
        <>
            <Header />
            <Box justifyContent="center" className={classes.root} >
                {view === ('false') &&
                    <IconButton onClick={() => setView('true')}><Home className={classes.icon} /></IconButton>


                }
                {view === ('true') &&
                    <>
                        <Button endIcon={
                            <CloseIcon className={classes.icon} />
                        } onClick={() => setView('false')}>Close</Button>
                        <Typography variant="h1">Test</Typography>
                    </>
                }
                <Typography>
                    testing
                </Typography>
                <Card Heading1="Can you see me?!" />
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button onClick={() => setView('1')}>One</Button>
                    <Button onClick={() => setView('2')}>Two</Button>
                    <Button onClick={() => setView('3')}>Three</Button>
                </ButtonGroup>
                {view === ('1') &&
                    <Typography variant="h1">View 1</Typography>
                }
                {view === ('2') &&
                    <Typography variant="h1">View 2</Typography>
                }
                {view === ('3') &&
                    <Typography variant="h1">View 3</Typography>
                }
            </Box>
            <Footer />
        </>
    );
}
export default Business;