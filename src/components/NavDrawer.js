import * as React from 'react';
import EjsContext from '../contexts';
import { data } from '../data';

// Mui Components
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

// Mui Icons
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PersonPinIcon from '@mui/icons-material/PersonPin';

const NavDrawer = () => {
    const { day, setDay } = React.useContext(EjsContext);
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = () => {
        setOpen(!open);
    }

    const handleSelect = (itemId) => {
        setDay({ id: itemId });
        toggleDrawer();
    };

    return (
        <React.Fragment>
            <AppBar
                component='footer'
                position='fixed'
                color='transparent'
                elevation={0}
                sx={{
                    top: 'auto',
                    bottom: 0
                }}
            >
                <Container maxWidth='sm' sx={{ py: 2 }}>
                    <Toolbar disableGutters sx={{ justifyContent: 'flex-end' }}>
                        {day.id &&
                            <Typography variant='subtitle1' sx={{ mr: 2 }}>{'Pilih Hari >>'}</Typography>
                        }

                        <Fab color='secondary' onClick={toggleDrawer} aria-label='pilih hari'>
                            <FormatListBulletedIcon />
                        </Fab>
                    </Toolbar>
                </Container>
            </AppBar>

            <SwipeableDrawer
                anchor='bottom'
                open={open}
                onClose={toggleDrawer}
                onOpen={toggleDrawer}
            >
                <Container maxWidth='sm'>
                    <List component='nav' aria-label='Day Selection'>
                        {data.map((item) => (
                            <ListItemButton
                                key={item.id}
                                onClick={() => handleSelect(item.id)}
                            >
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>

                                <ListItemText primary={item.label} />
                            </ListItemButton>
                        ))}
                    </List>

                    <Divider />

                    <List component='nav' aria-label='Claim Host'>
                        <ListItemButton
                            onClick={() => handleSelect(null)}
                        >
                            <ListItemIcon>
                                <PersonPinIcon />
                            </ListItemIcon>

                            <ListItemText primary='Claim Host' />
                        </ListItemButton>
                    </List>
                </Container>
            </SwipeableDrawer>
        </React.Fragment>
    )
};

export default NavDrawer;