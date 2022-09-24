import { useMemo, useState } from 'react';
import EjsContext from './contexts';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Header from './components/Header';
import NavDial from './components/NavDial';
import ContentForm from './components/ContentForm';
import Host from './components/Host';

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
                <Box sx={{ minHeight: '90vh', height: '100%', position: 'relative' }}>
                    <Header />

                    {day !== 'Klaim Host'
                        ? <ContentForm />
                        : <Host />
                    }

                    {/* <NavDrawer /> */}
                    <NavDial />
                </Box>
            </Container>
        </EjsContext.Provider>
    );
}

export default App;