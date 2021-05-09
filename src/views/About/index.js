import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const About = () => {
    const [view, setView] = useLocalStorage(false);
    function useLocalStorage(key) {
        const [storedValue, setStoredValue] = useState(() => {
            try {
                const item = window.localStorage.getItem(false);
                return item ? JSON.parse(item) : false;
            } catch (error) {
                return false;
            }
        });
        const setValue = (value) => {
            try {
                const valueToStore = value instanceof Function ? value(storedValue) : value;
                setStoredValue(valueToStore);
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
            } catch (error) { }
        };
        return [storedValue, setValue];
    }

    return (
        <>
            <Button color={view === false ? 'primary' : ''} variant={view === false ? 'contained' : ''} onClick={() => setView(false)}>Deafult</Button>
            <Button color={view === true ? 'primary' : ''} variant={view === true ? 'contained' : ''} onClick={() => setView(true)}>Second View</Button>
            {view === false &&
                <Box item xs={12}>
                    <p>FALSE</p>
                </Box>
            }
            {view === true &&
                <Box item xs={12}>
                    <p>TRUE</p>
                </Box>
            }
        </>
    )
}
export default About;