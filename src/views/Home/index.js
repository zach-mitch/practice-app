import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


import Chip from '@material-ui/core/Chip';
import clsx from 'clsx';


import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Switch from '@material-ui/core/Switch';


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

const item = (name, number, plan, email) => {
    return { name, number, plan, email };
}

const data = [
    item('Zach', 1, 'Premium Plan', 'zachary.weston@propellerhead.co.nz'),
    item('Mitch', 2, 'Starter Plan', 'mitchwilson@icloud.com'),
    item('Yixuan', 3, 'Premium Plan', 'yixuan.hou@propellerhead.co.nz'),
    item('Andrew', 4, 'Professional Plan', 'andrew.weston@propellerhead.co.nz'),
];



const Business = () => {
    const classes = useStyles();
    const [list, setList] = useState('default');
    const [icon, setIcon] = useState('false');
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [filter, setFilter] = React.useState(false);

    const openMenu = (event) => {
        setAnchorEl(event.currentTarget);
        setIcon('true')
    };

    const closeMenu = () => {
        setAnchorEl(null)
        setIcon('false')
    };

    function handleSwitchChange(e) {
        setFilter(e.target.checked);
    }


    return (

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
                <Switch checked={filter} onChange={handleSwitchChange} />
                {filter === false && <Typography>Customers</Typography>}
                {filter === true && <Typography>All Users</Typography>}
            </Box>
            {data.map((row) => (
                <>
                    {filter === true && row.email &&
                        <>
                            {list === 'default' && <Box padding="0.25rem" display="flex">
                                <Box> <Typography>{row.name}</Typography></Box>
                                <Chip className={clsx({ [classes.red]: row.plan === 'Starter Plan', [classes.yellow]: row.plan === 'Professional Plan', [classes.green]: row.plan === 'Premium Plan' })} label={row.plan} />
                            </Box>}
                            {row.plan === ('Starter Plan') && list === ('starter') && <Box padding="0.25rem" display="flex">
                                <Box> <Typography>{row.name}</Typography></Box>
                                <Chip className={clsx({ [classes.red]: row.plan === 'Starter Plan', [classes.yellow]: row.plan === 'Professional Plan', [classes.green]: row.plan === 'Premium Plan' })} label={row.plan} />
                            </Box>}
                            {row.plan === ('Professional Plan') && list === ('professional') && <Box padding="0.25rem" display="flex">
                                <Box> <Typography>{row.name}</Typography></Box>
                                <Chip className={clsx({ [classes.red]: row.plan === 'Starter Plan', [classes.yellow]: row.plan === 'Professional Plan', [classes.green]: row.plan === 'Premium Plan' })} label={row.plan} />
                            </Box>}
                            {row.plan === ('Premium Plan') && list === ('premium') && <Box padding="0.25rem" display="flex">
                                <Box> <Typography>{row.name}</Typography></Box>
                                <Chip className={clsx({ [classes.red]: row.plan === 'Starter Plan', [classes.yellow]: row.plan === 'Professional Plan', [classes.green]: row.plan === 'Premium Plan' })} label={row.plan} />
                            </Box>}
                        </>
                    }
                    {filter === false && !row.email.substring(0, row.email.indexOf('@propellerhead.co.nz') + row.email.indexOf('@avidaml.com')) &&
                        <>
                            {list === 'default' && <Box padding="0.25rem" display="flex">
                                <Box> <Typography>{row.name}</Typography></Box>
                                <Chip className={clsx({ [classes.red]: row.plan === 'Starter Plan', [classes.yellow]: row.plan === 'Professional Plan', [classes.green]: row.plan === 'Premium Plan' })} label={row.plan} />
                            </Box>}
                            {row.plan === ('Starter Plan') && list === ('starter') && <Box padding="0.25rem" display="flex">
                                <Box> <Typography>{row.name}</Typography></Box>
                                <Chip className={clsx({ [classes.red]: row.plan === 'Starter Plan', [classes.yellow]: row.plan === 'Professional Plan', [classes.green]: row.plan === 'Premium Plan' })} label={row.plan} />
                            </Box>}
                            {row.plan === ('Professional Plan') && list === ('professional') && <Box padding="0.25rem" display="flex">
                                <Box> <Typography>{row.name}</Typography></Box>
                                <Chip className={clsx({ [classes.red]: row.plan === 'Starter Plan', [classes.yellow]: row.plan === 'Professional Plan', [classes.green]: row.plan === 'Premium Plan' })} label={row.plan} />
                            </Box>}
                            {row.plan === ('Premium Plan') && list === ('premium') && <Box padding="0.25rem" display="flex">
                                <Box> <Typography>{row.name}</Typography></Box>
                                <Chip className={clsx({ [classes.red]: row.plan === 'Starter Plan', [classes.yellow]: row.plan === 'Professional Plan', [classes.green]: row.plan === 'Premium Plan' })} label={row.plan} />
                            </Box>}
                        </>
                    }
                </>
            ))}

        </Box>
    );
}
export default Business;