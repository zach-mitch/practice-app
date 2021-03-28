import React, {useEffect} from 'react';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';

import { Footer } from './Footer';
import { Header } from './Header';

const useStyles = makeStyles((theme) => ({
    container: {
        position: 'relative',
        minHeight: '100vh',
    },
    main: {
        paddingBottom: props => props.footerHeight,
    },
    footer: {
        position: 'absolute',
        left: 0,
        bottom: '0',
        width: '100vw',
        // height: props => props.footerHeight,
    }
}));

export const Layout = props => {
    const classes = useStyles({ footerHeight: '26rem' });
    const location = useLocation();

    // Safari doesn't support hash navigation so we manually implement it here.
    useEffect(() => {
        const { hash } = location;
        if (hash) {
            const el = document.getElementById(hash.slice(1));
            if (el) {
                if (el.scrollIntoViewIfNeeded) {
                    el.scrollIntoViewIfNeeded();
                } else {
                    el.scrollIntoView();
                }
            }
        }
    }, [location])

    return (
        <Box className={classes.container}>
            <Header />
            <main className={classes.main}>
                <Container maxWidth="lg">
                    {props.children}
                </Container>
            </main>
            <Footer className={classes.footer} />
        </Box>
    );
};

export default Layout;