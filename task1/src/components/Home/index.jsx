import React from 'react';
import { Button, Box } from '@mui/material'; // Assuming you're using Material-UI
import { Link } from 'react-router-dom';

export default function MyComponent() {
  return (
    <div style={{ height: '728px', backgroundColor: 'gray', display: 'flex', justifyContent: 'center' }}>
      
      
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '24px' }}>
         <Link to="/form" style={{ textDecoration: 'none' }}>
        <Button
          style={{
            backgroundColor: 'burlywood',
            color: 'black',
            borderRadius: '8px',
            padding: '10px 20px',
            textTransform: 'capitalize',
          }}
        >
          Add Data
        </Button>
        </Link>
        <Button
          style={{
            backgroundColor: 'burlywood',
            color: 'black',
            borderRadius: '8px',
            padding: '10px 20px',
            textTransform: 'capitalize',
          }}
        >
          View Table
        </Button>
      </Box>
    </div>
  );
}
