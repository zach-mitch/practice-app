import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import { Home } from '../../components/Icons/Home';
import { Settings } from '../../components/Icons/Settings';

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
                    <Button variant={more === '1' ? 'contained' : ''}
                        color={more === '1' ? 'primary' : ''} onClick={() => setMore('1')}>One</Button>
                    <Button variant={more === '2' ? 'contained' : ''}
                        color={more === '2' ? 'primary' : ''} onClick={() => setMore('2')}>Two</Button>
                    <Button variant={more === '3' ? 'contained' : ''}
                        color={more === '3' ? 'primary' : ''} onClick={() => setMore('3')}>Three</Button>
                </ButtonGroup>
                {more === ('1') &&
                    <Typography variant="h1">View 1</Typography>
                }
                {more === ('2') &&
                    <Typography variant="h1">View 2</Typography>
                }
                {more === ('3') &&
                    <Typography variant="h1">View 3</Typography>
                }
            </Box>
            <Footer />
        </>
    );
}
export default Business;