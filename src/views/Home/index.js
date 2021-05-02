import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import { Home } from '../../components/Icons/Home';
import Chip from '@material-ui/core/Chip';
import clsx from 'clsx';
import { SetView } from '../../components/SetView'
// import { RepeatingSetView } from '../../components/RepeatingSetView';
import { Layout } from '../../components/Layout/';
import { Card } from '../../components/Card'
// import { RepeatingSetView } from '../../components/RepeatingSetView'
// import { Card } from '../../components/Card'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


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
    },
    red: {
        background: theme.palette.success.contrastText,
        color: theme.palette.background.default,
    },
    green: {
        background: theme.palette.success.main,
        color: theme.palette.background.default,
    },
    yellow: {
        background: theme.palette.success.primer,
    },
}));

const item = (name, number, plan) => {
    return { name, number, plan };
}

const data = [
    item('Zach', 1, 'Premium Plan'),
    item('Mitch', 2, 'Starter Plan'),
    item('Yixuan', 3, 'Premium Plan'),
    item('Andrew', 4, 'Professional Plan'),
];



const Business = () => {
    const classes = useStyles();
    const [list, setList] = useState('default');
    const [icon, setIcon] = useState('false');
    const [anchorEl, setAnchorEl] = React.useState(null);

    const openMenu = (event) => {
        setAnchorEl(event.currentTarget);
        setIcon('true')
    };

    const closeMenu = () => {
        setAnchorEl(null)
        setIcon('false')
    };




    return (
        <Layout>
            <Box justifyContent="center" className={classes.root} >
                <Typography>
                    List
                </Typography>
                <Box paddingBottom="1rem">
                    <Button variant="outlined" color="secondary" onClick={openMenu}
                        endIcon={<>
                            {icon === ('false') && <ArrowDropDownIcon />}
                            {icon === ('true') && <ArrowDropUpIcon />}
                        </>} >
                        {list === ('default') && 'Plan Type'}
                        {list === ('starter') && 'Starter Plan'}
                        {list === ('professional') && 'Professional Plan'}
                        {list === ('premium') && 'Premium Plan'}

                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={closeMenu}>
                        <MenuItem disabled={true}>Plan Type</MenuItem>
                        <MenuItem onClick={() => { setList('default'); closeMenu() }}>All</MenuItem>
                        <MenuItem onClick={() => { setList('starter'); closeMenu() }}>Starter Plan</MenuItem>
                        <MenuItem onClick={() => { setList('professional'); closeMenu() }}>Professional Plan</MenuItem>
                        <MenuItem onClick={() => { setList('premium'); closeMenu() }}>Premium Plan</MenuItem>
                    </Menu>
                </Box>
                {data.map((row) => (
                    <>
                        {list === 'default' && <Box display="flex">
                            <Box> <Typography>{row.name}</Typography></Box>
                            <Chip className={clsx({ [classes.red]: row.plan === 'Starter Plan', [classes.yellow]: row.plan === 'Professional Plan', [classes.green]: row.plan === 'Premium Plan' })} label={row.plan} />
                        </Box>}
                        {row.plan === ('Starter Plan') && list === ('starter') && <Box display="flex">
                            <Box> <Typography>{row.name}</Typography></Box>
                            <Chip className={clsx({ [classes.red]: row.plan === 'Starter Plan', [classes.yellow]: row.plan === 'Professional Plan', [classes.green]: row.plan === 'Premium Plan' })} label={row.plan} />
                        </Box>}
                        {row.plan === ('Professional Plan') && list === ('professional') && <Box display="flex">
                            <Box> <Typography>{row.name}</Typography></Box>
                            <Chip className={clsx({ [classes.red]: row.plan === 'Starter Plan', [classes.yellow]: row.plan === 'Professional Plan', [classes.green]: row.plan === 'Premium Plan' })} label={row.plan} />
                        </Box>}
                        {row.plan === ('Premium Plan') && list === ('premium') && <Box display="flex">
                            <Box> <Typography>{row.name}</Typography></Box>
                            <Chip className={clsx({ [classes.red]: row.plan === 'Starter Plan', [classes.yellow]: row.plan === 'Professional Plan', [classes.green]: row.plan === 'Premium Plan' })} label={row.plan} />
                        </Box>}
                    </>
                ))}

            </Box>
        </Layout>
    );
}
export default Business;