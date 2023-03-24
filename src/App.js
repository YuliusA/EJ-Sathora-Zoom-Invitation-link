import { useMemo, useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import EjsContext from './contexts';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Header from './components/Header';
// import NavDrawer from './components/NavDrawer';
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
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<ContentForm />} />
                    <Route path='host' element={<Host />} />
                </Route>
            </Routes>
        </EjsContext.Provider>
    );
}
function Layout() {
    return (
        <Container maxWidth='sm'>
            <Header />
            <Outlet />
            {/* <NavDrawer /> */}
        </Container>
    );
}

export default App;