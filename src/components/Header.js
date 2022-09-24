import * as React from 'react';

// Mui Components
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

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
    return (
        <AppBar position='static' color='transparent' elevation={0} sx={{ mb: 3, mt: 1 }}>
            <Toolbar disableGutters>
                <Box sx={{ mr: 1, '& .logo': { verticalAlign: 'middle' }}}>
                    <img className='logo' src='images/sathora-logo.png' width={70} alt='' />
                </Box>

                <Typography variant='h5' component='div' sx={{ flexGrow: 1 }}>
                    EJ Sathora{bull}4
                </Typography>            
            </Toolbar>
        </AppBar>
    );
}

export default Header;