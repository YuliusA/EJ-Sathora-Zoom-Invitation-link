import { useMemo, useState } from 'react';
import EjsContext from './contexts';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Header from './components/Header';
// import NavDrawer from './components/NavDrawer';
import NavDial from './components/NavDial';
import ContentForm from './components/ContentForm';

function App() {
    const [day, setDay] = useState('Senin');
    const value = useMemo(
        () => ({ day, setDay }),
        [day]
    );

    return (
        <EjsContext.Provider value={value}>
            <CssBaseline />

            <Container maxWidth='sm'>
                <Box sx={{ minHeight: '90vh', height: 'calc(100% - 5rem)', position: 'relative' }}>
                    <Header />
                    <ContentForm />
                    {/* <NavDrawer /> */}
                    <NavDial />
                </Box>
            </Container>
        </EjsContext.Provider>
    );
}

export default App;