import React from 'react';
// import { useAuth0 } from "@auth0/auth0-react";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import ActionLink from '../ActionLink';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles(theme => ({
    navLinks: {
        margin: theme.spacing(1.5),
        borderBottomWidth: 2,
        borderBottomStyle: 'solid',
        borderBottomColor: "transparent",
        '&:hover': {
            borderBottomColor: theme.palette.primary.main,
            background: "transparent",
        },
    },
    logo: {
        display: 'flex',
        '& svg': {
            margin: theme.spacing(1.5),
            fontSize: '3rem',
        },
    },
    detailMenu: {
        background: theme.palette.background.default,
    },
    scrollMenu: {
        background: theme.palette.background.paper,
        '& h6, & a': {
            color: theme.palette.primary.main,
            '&:hover': {
                borderBottomColor: theme.palette.primary.main,
            },
        },
    },

}));

const MenuItems = [
    { label: 'About', link: '/about' },
    { label: 'Mitch', link: '/mitch' },
];


function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });

}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

export const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => { setAnchorEl(event.currentTarget); };
    const handleClose = () => { setAnchorEl(null); };
    const classes = useStyles();
    // const { logout, user } = useAuth0();

    return (
        <React.Fragment>
            <OnScroll >
                <AppBar position="fixed" elevation={0} >
                    <Toolbar>
                        <Link className={classes.logo} href="/">
                            Practice app
                        </Link>
                        <Box flexGrow={1} >
                            <Hidden smDown>
                                <>
                                    {MenuItems.map((p, index) =>
                                        <Button component={ActionLink} key={index} className={classes.navLinks} to={p.link} >
                                            {p.label}
                                        </Button>
                                    )}
                                </>
                            </Hidden>
                        </Box>

                        <Hidden mdUp><>
                            <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                <MenuIcon color="primary" />
                            </IconButton>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                {MenuItems.map((p, index) =>
                                    <MenuItem key={index} component={ActionLink} onClick={handleClose} to={p.link}>{p.label}</MenuItem>
                                )}

                            </Menu>
                        </></Hidden>

                    </Toolbar>
                </AppBar>
            </OnScroll>
            <Toolbar />
        </React.Fragment>
    );
}
const OnScroll = ({ level, children }) => {
    const classes = useStyles();
    const scrolling = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,

    });

    return React.cloneElement(children, {
        className: scrolling || level > 1 ? classes.detailMenu : classes.scrollMenu,
        elevation: scrolling ? 1 : 0,
    });
};