import { useMemo, useState } from 'react';
import EjsContext from './contexts';
import CssBaseline from '@mui/material/CssBaseline';
import NavDrawer from './components/NavDrawer';
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
            <ContentForm />
            <NavDrawer />
        </EjsContext.Provider>
    );
}

export default App;