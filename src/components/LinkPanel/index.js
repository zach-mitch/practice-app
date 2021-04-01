import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ActionLink from '../ActionLink';


import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    
}));


const TableHeader = props => {
    const { item1, item2, item3, item4, item5 } = props;
    return (
        <TableRow>
            <TableCell size="medium">{item1}</TableCell>
            <Hidden xsDown>
                <TableCell align="left">{item2}</TableCell>
            </Hidden>
            <Hidden mdDown>
                <TableCell align="right">{item3}</TableCell>
                <TableCell align="right">{item4}</TableCell>
            </Hidden>
            {item5 &&
                <TableCell align="right">{item5}</TableCell>
            }
        </TableRow>

    )
}



export const LinkPanel = props => {
    const classes = useStyles();
    const { dataType, body } = props;

    const createData = (name, prop1, prop2, prop3, prop4) => {
        return { name, prop1, prop2, prop3, prop4 };
    }

    const apps = [
        createData('Name', 'Number', 'Date', 'Email'),
    ];
    const mixpanel = [
        createData('NicketyName', 'fakeNumber', 'irrelevantDate', 'bullshitEmail'),
    ];

    const options = () => {
        switch (dataType) {
            case "row1" :
            return (
                <TableHead>
                    {apps.map((row) => (
                        <TableHeader  key={row.name} item1={row.name} item2={row.prop1} item3={row.prop2} item4={row.prop3} item5={row.prop4}/>
                    ))}
                </TableHead>
            );
            case "row2":
                return (
                    <TableHead>
                        {mixpanel.map((row) => (
                            <TableHeader key={row.name} item1={row.name} item2={row.prop1} item3={row.prop2} item4={row.prop3} key5={row.prop4} />
                        ))}
                    </TableHead>
                );
            default:
                throw new Error('Invalid dataType prop passed to RefSelect');
        }
    }
    return (
        <TableContainer className={classes.root} component={Paper}>
            <Table size="small" aria-label="App table">
                {options()}
                <TableBody>{body}</TableBody>
            </Table>
        </TableContainer>
    );
}
export const Cell = props => {
    const { Name, Date, Number, Email } = props;

    return (
        <TableRow >
            <TableCell component="th" scope="row">{Name}</TableCell>
            <Hidden xsDown>
                <TableCell align="left">{Date}</TableCell>
            </Hidden>
            <Hidden mdDown>
                <TableCell align="right">{Number}</TableCell>
                <TableCell align="right">
                    <Button  href={Email}>
                        {Email}
                    </Button>
                </TableCell>
            </Hidden>
            {/* <TableCell align="right">
                <Button size="small" variant="contained" color="primary" href={Portal}>{Name} data</Button>
            </TableCell> */}
        </TableRow>
    )
}