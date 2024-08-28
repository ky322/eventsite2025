import React from 'react';
import { Box } from '@mui/material';

const Hero: React.FC = () => {
    return (
        <Box display="flex" alignItems="center">
            <img src="src/components/hero-full.png" style={{ 
                // height: '80vh',
                margin: 'auto',
                width: '100%'
            }}  />
        </Box>
    );
};

export default Hero;