import React from 'react';
import { Layout } from '../../components/Layout/';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { LinkPanel, Cell } from '../../components/LinkPanel';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    box: {
        display: 'grid',
        placeItems: 'center',
        

    },
    boxpad: {
        padding: '150px',
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

const client = [
    createClient('Mr Pepelo', '02/02/1989', '0210203958590', 'pepelo@gmail.com'),
    createClient('Mr Kaka', '09/02/1983', '021085847838', 'smellalikakaka@gmail.com')
]

const Mitch = () => {
    const classes = useStyles();
    return(
        <Layout>
            <Box className={classes.box}>
                <Typography variant="h2">
                    Mitch
                </Typography>
                <LinkPanel className={classes.boxpad} dataType="row1" body={
                <>
                    {rows.map((row) => (
                        <Cell key={row.name} Name={row.name} Date={row.date} Number={row.number} Email={row.email}/>
                    ))}
                </>
                } />
                <Grid >
                <LinkPanel dataType="row2" body={
                <>
                    {client.map((row) => (
                        <Cell key={row.name} Name={row.name} Date={row.date} Number={row.number} Email={row.email}/>
                    ))}
                </>
                } />

                </Grid>
                
                
            </Box>

        </Layout>

    )
}
export default Mitch;