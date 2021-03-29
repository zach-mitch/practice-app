import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';


export const SetView = ({ setView1, setView2, setView3, item1, item2, item3 }) => {
    const [more, setMore] = useState('1');

    return (
        <>
            <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button variant={more === '1' ? 'contained' : ''}
                    color={more === '1' ? 'primary' : ''} onClick={() => setMore('1')}>{setView1}</Button>
                <Button variant={more === '2' ? 'contained' : ''}
                    color={more === '2' ? 'primary' : ''} onClick={() => setMore('2')}>{setView2}</Button>
                <Button variant={more === '3' ? 'contained' : ''}
                    color={more === '3' ? 'primary' : ''} onClick={() => setMore('3')}>{setView3}</Button>
            </ButtonGroup>
            {
                more === ('1') &&
                <Typography variant="h1">{item1}</Typography>
            }
            {
                more === ('2') &&
                <Typography variant="h1">{item2}</Typography>
            }
            {
                more === ('3') &&
                <Typography variant="h1">{item3}</Typography>
            }
        </>
    )
}