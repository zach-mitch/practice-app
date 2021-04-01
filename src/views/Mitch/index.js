import React from 'react';
import { Layout } from '../../components/Layout/';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { LinkPanel, Cell } from '../../components/LinkPanel';

const useStyles = makeStyles(theme => ({
    box: {
        display: 'grid',
        placeItems: 'center',

    }
}));

const createClient = ( name, date, number, email) => {
    return { name, date, number, email };
}


const rows = [
    createClient('Zachary Weston', '01/04/21', '0211822065', 'zachary@gmail.com' ),
    createClient('Mitch Wilson', '01/04/21', '0211822065', 'mr.mitcholl@gmail.com' ),
    createClient('James Clement', '01/04/21', '0211822065', 'james@gmail.com' )



];

const Mitch = () => {
    const classes = useStyles();
    return(
        <Layout>
            <Box className={classes.box}>
                <Typography variant="h2">
                    Mitch
                </Typography>
                <LinkPanel dataType="row1" body={
                <>
                    {rows.map((row) => (
                        <Cell key={row.name} Name={row.name} Date={row.date} Number={row.number} Email={row.email}/>
                    ))}
                </>
                } />
                <LinkPanel dataType="row2" body={
                <>
                    {rows.map((row) => (
                        <Cell key={row.name} Name={row.name} Date={row.date} Number={row.number} Email={row.email}/>
                    ))}
                </>
                } />
                
            </Box>

        </Layout>

    )
}
export default Mitch;