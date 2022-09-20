import * as React from 'react';
import EjsContext from '../contexts';
import { data } from '../data';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const NavDrawer = () => {
    const { day, setDay } = React.useContext(EjsContext);
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = () => {
        setOpen(!open);
    }

    const handleChange = (event) => {
        setDay(event.target.value);
        toggleDrawer();
    }

    return (
        <React.Fragment>
            <AppBar position='fixed' color='transparent' elevation={0} sx={{ top: 'auto', bottom: 0 }}>
                <Container maxWidth='sm' sx={{ py: 2 }}>
                    <Fab color='secondary' onClick={toggleDrawer} aria-label='pilih hari'>
                        <FormatListBulletedIcon />
                    </Fab>
                </Container>
            </AppBar>

            <SwipeableDrawer
                anchor='bottom'
                open={open}
                onClose={toggleDrawer}
                onOpen={toggleDrawer}
            >
                <Container maxWidth='sm'>
                    <FormControl fullWidth>
                        <RadioGroup
                            name='ejs-days-radio-btns-group'
                            value={day}
                            onChange={handleChange}
                            sx={{
                                my: 2,
                                width: '100%',
                                '& .MuiFormControlLabel-root': {
                                    py: 0.5
                                }
                            }}
                        >
                            {data.map((item, index) => (
                                <React.Fragment key={item.id}>
                                    <FormControlLabel
                                        value={item.id}
                                        control={<Radio />}
                                        label={item.id}
                                    />
                                    {(data.length - 1) !== index && <Divider />}
                                </React.Fragment>
                            ))}
                        </RadioGroup>
                    </FormControl>
                </Container>
            </SwipeableDrawer>
        </React.Fragment>
    )
};

export default NavDrawer;