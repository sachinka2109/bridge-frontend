import { Box, Grid, TextField, Typography,Button } from '@mui/material'
import React from 'react'

function ForgotPassword() {
  return (
    <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',alignContent:'center',my:4}}>
        <Grid sx={{py:3}}>
            <Typography variant="h5" color="initial" sx={{fontWeight:'bold'}}>Forgot your Password?</Typography>
        </Grid>
        <Grid container sx={{border:'1px solid #E4E4E4', borderRadius:'4px',justifyContent:'center',alignItems:'center' ,flexDirection:'column',width:424}}>
          <Grid item sx={{p:6}}>
            <Typography variant="body1" sx={{color:'#878787'}}>Enter your email address and we'll send you a link to reset your password.</Typography>
            <Grid item sx={{display:'flex',flexDirection:'column',width:'100%',my:3}}> 
              <label htmlFor="emailid" >Email id</label>
              <TextField fullWidth inputProps={{style:{padding:5}}} id='emailid'/>
            </Grid>
            <Button variant='contained' sx={{backgroundColor:'#A03037',textTransform:'none'}} fullWidth>Reset Password</Button>
          </Grid>
          <Button variant="contained" fullWidth sx={{p:3,backgroundColor:'#F9F9F8',color:'black',fontWeight:'bold','&:hover':{backgroundColor:'#F9F9F8'}}}>
            Create Account
          </Button>
        </Grid>
    </Box>
  )
}

export default ForgotPassword