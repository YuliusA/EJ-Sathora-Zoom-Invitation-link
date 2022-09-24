import * as React from 'react';
import EjsContext from '../contexts';
import { data } from '../data';

// Mui Components
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import PersonPinIcon from '@mui/icons-material/PersonPin';

const NavDial = () => {
    const { setDay } = React.useContext(EjsContext);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const actions = [
        ...data,
        {
            id: 'Klaim Host',
            icon: <PersonPinIcon />,
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
                    bottom: '7vh',
                    right: 32,
                }}
                icon={<SpeedDialIcon />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
            >
                {actions.map((item) => (
                    <SpeedDialAction
                        key={item.id}
                        icon={item.icon}
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