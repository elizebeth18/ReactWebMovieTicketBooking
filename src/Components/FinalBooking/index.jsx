import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { Box, Typography, Card,TextField, Button, Paper } from '@mui/material';

const FinalBooking = () => {
    const [inputText, setInputText] = useState('');
    const [qrText, setQRText] = useState('');

    return (
        <Box sx={{ p: 4, margin: 'auto', textAlign: 'center' }}>
            <Typography variant='h5' gutterBottom>QR Code</Typography>
            <Paper sx={{ mt: 3, p: 1, display: 'inline-block' }}>
                <QRCodeCanvas
                    value='http://test.com'
                    size={256} bgColor='#ffffff'
                    fgColor='#000000' level='H'
                />
            </Paper>
            
                <Box sx={{}}>
                    <Card>
                        <Typography variant='h5'>Ticket Details</Typography>
                    </Card>
                </Box>
        </Box>
    )
}

export default FinalBooking;