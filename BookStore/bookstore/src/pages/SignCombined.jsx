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
        <Paper sx={{width:'624px',height:'391px',borderRadius:'21px'}} className='sign-img'>
            <img src={SignCombinedImage} alt="" srcset="" style={{width:'245px',borderRadius:'50%',margin:'52px 53px 94px'}}/>
        </Paper>
        <Grid container sx={{justifyContent:'center',my:5}}>
            <Grid item>
                <Paper sx={{ width: '389px', height: '425px',borderRadius:'6px' }} elevation={5}  className='sign-form'>
                    {page? (<Signup changePage={changePage}/>) : (<Login changePage={changePage}/>)}
                </Paper>
            </Grid>
        </Grid>
    </Container>
  )
}

export default SignCombined