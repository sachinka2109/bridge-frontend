import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import { Container,Box, Grid} from '@mui/material'
import Login from './Login';
import Signup from './Signup';
import './SignCombined.css'
import SignCombinedImage from '../Images/SignCombined.png'

function SignCombined() {
    const [page,changePage] = useState(false);
  return (
    <Container maxWidth='lg'>
        <Grid container sx={{justifyContent:'center',my:5,border:'2px solid black'}} className='signform'>
            <Grid item>
                <Paper sx={{width:'200px',height:'391px',borderRadius:'21px',display:'flex',flexDirection:'column',justifyContent:'center',paddingLeft:'53px'}} elevation={5}>
                    <img src={SignCombinedImage} alt="" srcSet="" style={{width:'245px',borderRadius:'50%'}}/>
                    <p style={{fontWeight:'bold',textTransform:'uppercase',paddingLeft:'35px'}}>Online Book Shopping</p>
                </Paper>
            </Grid>
            <Grid item>
                <Paper sx={{ width: '389px', height: '425px',borderRadius:'6px' }} elevation={5}>
                    {page? (<Signup changePage={changePage}/>) : (<Login changePage={changePage}/>)}
                </Paper>
            </Grid>
        </Grid>
    </Container>
  )
}

export default SignCombined