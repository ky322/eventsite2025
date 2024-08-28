import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <Box 
            sx={{
                backgroundColor: '#E57373', 
                color: '#FFFFFF',
                paddingTop: '20px',
                paddingBottom: '20px',
                textAlign: 'center',
                fontWeight: 'bold',
                fontFamily: 'Arial, sans-serif',
                bottom: 0,
                width: '100%',
            }}
        >
            <Typography variant="body1">
                Brewed with ❤️ by <span style={{ fontWeight: 'normal' }}>Big Red // Hacks Team</span>
            </Typography>
        </Box>
    );
};

export default Footer;