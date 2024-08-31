import React from 'react';
import { Box, Typography } from '@mui/material';

const Sponsors: React.FC = () => {
    return (
        <Box sx={{ padding: '40px', backgroundColor: '#FFFCF4' }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#EA9A00', marginBottom: '20px' }}>
                Sponsors
            </Typography>
        </Box>
    );
};

export default Sponsors;