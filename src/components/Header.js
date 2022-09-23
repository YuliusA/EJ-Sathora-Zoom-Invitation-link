import * as React from 'react';
import EjsContext from '../contexts';

// Mui Components
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// Mui Icons
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

const bull = (
    <Box
        component='span'
        sx={{
            display: 'inline-block',
            mx: '2px',
            transform: 'scale(0.8)'
        }}
    >
      •
    </Box>
);

const Header = () => {
    const { day } = React.useContext(EjsContext);

    return (
        <AppBar position='static' color='transparent' elevation={0} sx={{ mb: 3, mt: 1 }}>
            <Toolbar disableGutters>
            
                <Box sx={{ mx: 1, '& .logo': { verticalAlign: 'middle' }}}>
                    <img className='logo' src='images/sathora-logo.png' width={70} alt='' />
                </Box>

                <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                    EJ Sathora{bull}4
                </Typography>

                <Typography variant='h6' component='div' sx={{ mr: 1 }}>
                    <EventAvailableIcon color='secondary' sx={{ mr: 0.5, verticalAlign: 'text-bottom' }} />
                    {day}
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;