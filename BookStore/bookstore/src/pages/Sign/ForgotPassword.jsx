import { Box, Grid, TextField, Typography,Button } from '@mui/material'
import React from 'react'

function ForgotPassword() {
  return (
    <Box>
        <Grid>
            <Typography variant="h5" color="initial">Forgot your Password?</Typography>
        </Grid>
        <Grid container sx={{border:'1px solid #E4E4E4',justifyContent:'center',alignItems:'center' ,flexDirection:'column',width:424,p:5}}>
            <Typography variant="body1" style={{color:'#878787'}}>Enter your email address and we'll send you a link to reset your password.</Typography>
            <Grid item sx={{display:'flex',flexDirection:'column',width:'100%'}}> 
                <label htmlFor="">Email id</label>
                <TextField fullWidth/>
            </Grid>
            <Button variant='contained' sx={{backgroundColor:'#A03037',textTransform:'none'}}>Reset Password</Button>
        </Grid>
    </Box>
  )
}

export default ForgotPassword