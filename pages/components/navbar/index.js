import * as React from 'react';
import {Box, Grid, Typography, ButtonBase} from '@mui/material';
import styles from '../../../styles/Home.module.css';
import Image from 'next/image'
import Username from './Username'



export default function HeaderAppbar() {
  return (
    
        <Box>
            <Grid container 
            sx= {{bgcolor: 'rgba(0, 110, 97, 1)', 
                  padding: '0.2%',
                  }}>
            </Grid>

            <Grid container
            sx= {{ alignItems: 'center',
                   justifyContent: 'space-between',
                   padding: '0.3%',
                   
                }}>
                <Image src="/Comu.png" alt="sdda" width={`300px`} height={'76px'} />
                <Username/>
            </Grid>
            
            <Grid container
                sx= {{bgcolor: 'rgba(0, 110, 97, 1)', 
                      boxShadow: `6px 6px 9px rgba(0, 0, 0, 0.25)`
                    }}>
                <Grid sx= {{display: 'flex',
                      width: '6.5%', 
                      bgcolor: '#B8B8B85E', 
                      justifyContent: 'center', 
                      ml: '5%', 
                      padding: '0.9%'}}>
                  <ButtonBase disabled>
                    <Typography variant="text" className={styles.kanit} 
                    sx= {{color: 'white', 
                    fontWeight: '600',
                    fontSize: '18px',
                    '&:hover': {bgcolor: '#B8B8B85E'}
                    }}>หน้าหลัก</Typography>
                  </ButtonBase>
                </Grid>

            </Grid>
        
               
        
        </Box>

    
      
    
  );
}