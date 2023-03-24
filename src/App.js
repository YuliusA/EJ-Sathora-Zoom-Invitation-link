import { useMemo, useState } from 'react';
import EjsContext from './contexts';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Header from './components/Header';
import NavDrawer from './components/NavDrawer';
import ContentForm from './components/ContentForm';
import Host from './components/Host';

function App() {
    const [day, setDay] = useState({ id: 1, label: 'Senin' });
    const value = useMemo(
        () => ({ day, setDay }),
        [day]
    );

    return (
        <EjsContext.Provider value={value}>
            <CssBaseline />
            <Container maxWidth='sm'>
                <Header />

                {day.id
                    ? <ContentForm />
                    : <Host />
                }

                <NavDrawer />
            </Container>
        </EjsContext.Provider>
    );
}

export default App;