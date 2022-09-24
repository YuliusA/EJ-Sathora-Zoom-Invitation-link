import * as React from 'react';
import EjsContext from '../contexts';
import { data } from '../data';

// Mui Components
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SaveIcon from '@mui/icons-material/Save';

const NavDial = () => {
    const { setDay } = React.useContext(EjsContext);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const actions = [
        ...data,
        {
            id: 'Klaim Host',
            linkZoom: '',
            meetingId: '',
            passcode: ''
        }
    ];

    const selectDay = (id) => {
        setDay(id);
        handleClose();
    };

    return (
        <React.Fragment>
            <Backdrop open={open} />

            <SpeedDial
                ariaLabel='Select Day'
                sx={{
                    position: 'fixed',
                    bottom: '10vh',
                    right: 20,
                }}
                icon={<SpeedDialIcon />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
            >
                {actions.map((item) => (
                    <SpeedDialAction
                        key={item.id}
                        icon={<SaveIcon />}
                        tooltipTitle={item.id}
                        tooltipOpen
                        onClick={() => selectDay(item.id)}
                    />
                ))}
            </SpeedDial>
        </React.Fragment>
    );
}

export default NavDial;