import React from 'react';

import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

// import { useFooter } from '../../api';
import ActionLink from '../../components/ActionLink';

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.primary.dark,
        '& *': {
            color: theme.palette.secondary.contrastText,
        },
    },
}));

export const Footer = (props) => {
    const classes = useStyles();
    // const { footerItems } = useFooter();

    return (
        <footer className={clsx(props.className, classes.footer)}>
            <Box disply='flex' flexDirection='cloumn' style={{ padding: '4rem' }} >
                <Typography variant='h3' style={{ paddingBottom: '2rem' }}>Avid AML</Typography>

                <Box display='flex' justifyContent='space-between' style={{ paddingTop: '2rem' }} alignItems='flex-end'>
                    <Typography>
                        <Link target="_blank" rel="noopener" component={ActionLink} to={`/document/terms-of-service`}>
                            Terms of Service
                        </Link> &nbsp;| &nbsp;
                        <Link target="_blank" rel="noopener" component={ActionLink} to={`/document/privacy-policy`}>
                            Privacy Policy
                        </Link>
                    </Typography>
                    <Typography>© 2021 Avid AML. All Rights Reserved.</Typography>
                </Box>
            </Box>
        </footer>
    );
}