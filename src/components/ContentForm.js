import * as React from 'react';
import moment from 'moment';
import EjsContext from '../contexts';
import { data } from '../data';
import content from './content';

// Mui Components
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import Snackbar from '@mui/material/Snackbar';

// Mui Icons
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function getNextMonday(date = new Date(), day = 1) {
    const dateCopy = new Date(date.getTime());
  
    const nextMonday = new Date(
        dateCopy.setDate(
            dateCopy.getDate() + ((7 - dateCopy.getDay() + day) % 7 || 7),
        ),
    );
    return nextMonday;
}

const ContentForm = () => {
    const { day } = React.useContext(EjsContext);
    const selectedDay = data.find((item) => item.id === day.id);
    const [snack, setSnack] = React.useState({
        open: false,
        vertical: 'bottom',
        horizontal: 'center'
    });
    const { vertical, horizontal, open } = snack;
    const inputRef = React.useRef();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnack({ ...snack, open: false });
    };

    const copyText = () => {
        inputRef.current.select();
        inputRef.current.setSelectionRange(0, 99999); /* For mobile devices */
        navigator.clipboard.writeText(inputRef.current.value); /* Copy the text inside the text field */
        setSnack({ ...snack, open: true });
    }

    return (
        <Box
            component='main'
            sx={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <TextField
                id='invitationInput'
                inputRef={inputRef}
                value={content(selectedDay)}
                multiline
                sx={{
                    visibility: 'hidden',
                    opacity: 0,
                    width: 0,
                    height: 0,
                }}
            />

            <Card variant='outlined'>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: 'secondary.main' }} aria-label='Calendar'>
                            <EventAvailableIcon />
                        </Avatar>
                    }
                    title={
                        <Typography variant='h6' color='secondary' sx={{ lineHeight: 1.25 }}>
                            {selectedDay.label}
                        </Typography>
                    }
                    subheader={
                        <Typography
                            variant='subtitle2'
                            color='text.secondary'
                            sx={{
                                lineHeight: 1.25,
                                '& .MuiSvgIcon-root': {
                                    fontSize: '1rem',
                                    verticalAlign: 'text-top',
                                    ml: 1,
                                }
                            }}
                        >
                            {moment(getNextMonday(new Date(), selectedDay.id)).format('DD MMM \'YY')}
                            <AccessTimeIcon /> 19:00
                        </Typography>
                    }
                    action={
                        <IconButton
                            size='small'
                            color='primary'
                            onClick={copyText}
                        >
                            <ContentCopyOutlinedIcon fontSize='small' />
                        </IconButton>
                    }
                    sx={{
                        alignItems: 'center',
                        '& .MuiCardHeader-action': {
                            alignSelf: 'center'
                        }
                    }}
                />

                <Divider />

                <CardContent sx={{ pt: 3, wordBreak: 'break-word' }}>
                    <Typography variant='body2' mb={3}>
                        EJ Sathora is inviting you to a scheduled Zoom meeting.
                    </Typography>

                    <Typography variant='body2'>
                        Topic: EJ Sathora 4 - {selectedDay.label} Malam
                    </Typography>

                    <Typography variant='body2' mb={3}>
                        Time: 19.00 Jakarta
                    </Typography>

                    <Typography variant='body2'>
                        Join Zoom Meeting
                    </Typography>

                    <Link
                        href={selectedDay.linkZoom}
                        variant='body2'
                        sx={{
                            mb: 3,
                            display: 'inline-block',
                        }}
                    >
                        {selectedDay.linkZoom}
                    </Link>

                    <Typography variant='body2'>
                        Meeting ID: {selectedDay.meetingId} <br />
                        Passcode: {selectedDay.passcode}
                    </Typography>
                </CardContent>
            </Card>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                onClose={handleClose}
                autoHideDuration={2000}
                message={
                    <Stack direction='row' spacing={1} alignItems='center'>
                        <CheckCircleOutlineOutlinedIcon />
                        <Typography>Text Copied!</Typography>
                    </Stack>
                }
                sx={{ bottom: { xs: '20%' } }}
            />
        </Box>
    )
}

export default ContentForm;