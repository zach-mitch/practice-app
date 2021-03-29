import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


export const RepeatingSetView = ({ setView, setRepeat, item }) => {
    const [more, setMore] = useState({ setRepeat });

    return (
        <>
            <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button variant={more === { setRepeat } ? 'contained' : ''}
                    color={more === { setRepeat } ? 'primary' : ''} onClick={() => setMore({ setRepeat })}>{setView}</Button>
            </ButtonGroup>
            {more === ({ setRepeat }) &&
                <>{item}</>
            }
        </>
    )
}