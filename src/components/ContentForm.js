import * as React from 'react';
import EjsContext from '../contexts';
import { data } from '../data';
import content from './content';

// Mui Components
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Snackbar from '@mui/material/Snackbar';
import Divider from '@mui/material/Divider';

// Mui Icons
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

const ContentForm = () => {
    const { day } = React.useContext(EjsContext);
    const selectedDay = data.find((item) => item.id === day);
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
        <React.Fragment>
            <Divider />

            <Box
                sx={{
                    pt: 3,
                    pb: 11,
                    // minHeight: '100vh',
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
                    <CardContent sx={{ wordBreak: 'break-word' }}>
                        {/* <Typography variant='h5' component='div' mb={3}>
                            EJ Sathora{bull}4{bull} {day}
                        </Typography> */}

                        <Typography variant='body2' mb={3}>
                            EJ Sathora is inviting you to a scheduled Zoom meeting.
                        </Typography>

                        <Typography variant='body2'>
                            Topic: EJ Sathora 4 - {selectedDay.id} Malam
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

                    <CardActions>
                        <Button
                            size='small'
                            onClick={copyText}
                            startIcon={<ContentCopyOutlinedIcon />}
                            sx={{ lineHeight: 2 }}
                        >
                            Copy
                        </Button>
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
                        />
                    </CardActions>
                </Card>
            </Box>
        </React.Fragment>
    )
}

export default ContentForm;