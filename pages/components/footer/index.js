import * as React from 'react';
import {Box, Grid, Typography} from '@mui/material';
import styles from '../../../styles/Home.module.css';

export default function Footer() {
  return (
    <Box>
      <Grid container sx={{
        bgcolor: 'rgba(0, 110, 97, 1)', 
        justifyContent: 'center', 
        alignItem: 'center', 
        padding: '1%', 
        mt: '1%',
       
        }}>
          <Typography className={styles.kanit} color="white">Copyright  © The Treasury Department</Typography>

      </Grid>
    </Box>



  );
} 