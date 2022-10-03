import * as React from 'react';

// Mui Components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';

// Mui Icons
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';

const Host = () => {
    const [copied, setCopied] = React.useState(false);
    const keyRef = React.useRef();

    React.useEffect(() => {
        const loading = setTimeout(() => {
            setCopied(false);
        }, 2000);

        return () => {
            clearTimeout(loading);
        }
    }, [copied]);

    const copyKey = () => {
        keyRef.current.select();
        keyRef.current.setSelectionRange(0, 99999); /* For mobile devices */
        navigator.clipboard.writeText(keyRef.current.value); /* Copy the text inside the text field */

        setCopied(true);
        // setSnack({ ...snack, open: true });
    }

    return (
        <Box component='main' sx={{ pb: 9 }}>
            <Typography variant='h5' color='secondary' sx={{ mb: 2 }}>
                Claim Host
            </Typography>

            <Typography sx={{ mb: 2 }}>
                Zoom meeting untuk sesi-sesi EJ ini adalah "open zoom meeting", artinya peserta meeting dapat join sebelum host atau tanpa host, yaitu 15 menit sebelum waktu yang dijadwalkan. Untuk itu fasilitator diharapkan untuk join lebih dahulu sebelum peserta EJ, dan dapat melakukan Claim Host pada sesi yang berlangsung. Dengan demikian anda (fasilitator) memegang kendali atas meeting tersebut. Contoh: host dapat melakukan share screen atau menjadikan fasilitator lain sebagai co-host.
            </Typography>

            <Typography sx={{ mb: 4 }}>
                Berikut adalah langkah-langkah untuk Claim Host.
            </Typography>

            <Divider
                sx={{
                    color: 'secondary.main',
                    '&:before': { borderColor: 'secondary.main' },
                    '&:after': { borderColor: 'secondary.main' },
                }}
            >
                Langkah 1
            </Divider>

            <Box sx={{ pt: 2, pb: 3 }}>
                <Typography sx={{ mb: 2 }}>
                    Setelah anda join meeting klik tombol participants yang biasanya terletak di bagian bawah layar
                </Typography>

                <CardMedia
                    component='img'
                    height='auto'
                    image='images/klaim_host_01.png'
                    alt=''
                    sx={{ mb: 1 }}
                />
                <Typography
                    variant='caption'
                    display='block'
                    fontStyle='italic'
                    color='text.secondary'
                    sx={{ mb: 2 }}
                >
                    Gbr 1. Participants menu
                </Typography>
            </Box>

            <Divider
                sx={{
                    color: 'secondary.main',
                    '&:before': { borderColor: 'secondary.main' },
                    '&:after': { borderColor: 'secondary.main' },
                }}
            >
                Langkah 2
            </Divider>

            <Box sx={{ pt: 2, pb: 3 }}>
                <CardMedia
                    component='img'
                    height='auto'
                    image='images/klaim_host_02a.png'
                    alt=''
                    sx={{ mb: 1 }}
                />
                <Typography
                    variant='caption'
                    display='block'
                    fontStyle='italic'
                    color='text.secondary'
                    sx={{ mb: 2 }}
                >
                    Gbr 2. Participants window
                </Typography>

                <Typography sx={{ mb: 2 }}>
                    Setelah window participants muncul, klik tombol <IconButton variant='outlined' size='small'><MoreHorizIcon fontSize='small' /></IconButton> yang ada di kanan bawah dan pilih "Claim host"
                </Typography>

                <CardMedia
                    component='img'
                    height='auto'
                    image='images/klaim_host_02b.png'
                    alt=''
                    sx={{ mb: 1 }}
                />
                <Typography
                    variant='caption'
                    display='block'
                    fontStyle='italic'
                    color='text.secondary'
                    sx={{ mb: 2 }}
                >
                    Gbr 3. Claim Host menu
                </Typography>
            </Box>

            <Divider
                sx={{
                    color: 'secondary.main',
                    '&:before': { borderColor: 'secondary.main' },
                    '&:after': { borderColor: 'secondary.main' },
                }}
            >
                Langkah 3
            </Divider>

            <Box sx={{ pt: 2, pb: 3 }}>
                <CardMedia
                    component='img'
                    height='auto'
                    image='images/klaim_host_03a.png'
                    alt=''
                    sx={{ mb: 1 }}
                />
                <Typography
                    variant='caption'
                    display='block'
                    fontStyle='italic'
                    color='text.secondary'
                    sx={{ mb: 2 }}
                >
                    Gbr 4. Claim Host window
                </Typography>

                <Typography sx={{ mb: 2 }}>
                    Setelah Claim Host window muncul, masukkan Host Key pada bagian input
                </Typography>

                <TextField
                    id='hostKeyInput'
                    defaultValue='745313'
                    inputRef={keyRef}
                    InputProps={{
                        readOnly: true,
                        startAdornment: <InputAdornment position='start' sx={{ mr: 2 }}>Host key:</InputAdornment>,
                        endAdornment: !copied ? (
                            <InputAdornment position='end'>
                                <IconButton size='small' color='primary' onClick={copyKey}>
                                    <ContentCopyOutlinedIcon fontSize='small' />
                                </IconButton>
                            </InputAdornment> ) : ( <Typography color='primary'>Copied</Typography> )
                    }}
                    sx={{ bgcolor: 'grey.200', width: '100%', mb: 2 }}
                />

                <CardMedia
                    component='img'
                    height='auto'
                    image='images/klaim_host_03b.png'
                    alt=''
                    sx={{ mb: 1 }}
                />
                <Typography
                    variant='caption'
                    display='block'
                    fontStyle='italic'
                    color='text.secondary'
                    sx={{ mb: 2 }}
                >
                    Gbr 5. Enter Host Key
                </Typography>
            </Box>

            <Box sx={{ pt: 2, pb: 6 }}>
                <CardMedia
                    component='img'
                    height='auto'
                    image='images/klaim_host_04.png'
                    alt=''
                    sx={{ mb: 1 }}
                />
                <Typography
                    variant='caption'
                    display='block'
                    fontStyle='italic'
                    color='text.secondary'
                    sx={{ mb: 2 }}
                >
                    Gbr 4. Host, Me
                </Typography>

                <Typography sx={{ mb: 4 }}>
                    Setelah Host Key berhasil diverifikasi anda sudah menjadi host.
                </Typography>

                <Alert severity="info">Jangan lupa untuk "end" meeting setiap kali pertemuan ya!</Alert>
            </Box>
        </Box>
    );
}

export default Host;