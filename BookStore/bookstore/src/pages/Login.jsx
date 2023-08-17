import React, { useState } from 'react'
import { TextField, Grid, Button, Link } from '@mui/material'
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './Signup.css';

function Login({changePage}) {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    }
    const handleMouseDownPassword = () => {

    }
    return (
        <Grid container sx={{ justifyContent: 'center', gap: 2, flexDirection: 'column', alignItems: 'center',py:2}}>
            <Grid container sx={{ justifyContent: 'center', gap: 12 }}>
                <Grid item className='Login-link'> 
                    <Link sx={{ fontSize: '25px', color: '#0A0102',fontWeight:'bold',textDecoration:'none'}} >
                        LOGIN
                    </Link>
                </Grid>
                <Grid item onClick={()=> changePage(true)}>
                    <Link sx={{ fontSize: '25px', color: '#878787',fontWeight:'bold',textDecoration:'none'}}>
                        SIGNUP
                    </Link>
                </Grid>
            </Grid>
            <Grid item>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <label style={{ fontSize: '10px' }}>Email Id</label>
                    <TextField
                        id="email"
                        label=""
                        sx={{ width: '252px', height: '35px' }}
                        inputProps={{
                            style: {
                                padding: 6
                            }
                        }}
                    />
                </div>
            </Grid>
            <Grid item sx={{marginTop:'3px',marginBottom:'14px'}}>
                <FormControl sx={{ m: 1, width: '252px', height: '35px' }} variant="outlined">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <label style={{ fontSize: '10px' }}>Password</label>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            inputProps={{
                                style: {
                                    padding: 6
                                }
                            }}
                        />
                        <label style={{ fontSize: '10px',alignSelf:'flex-end',color:'#9D9D9D'}}>Forgot Password?</label>
                    </div>
                </FormControl>
            </Grid>
            <Grid item>
                <Button variant='contained' sx={{ width: '252px', backgroundColor: '#A03037' }}>
                    Login
                </Button>
            </Grid>
            <Divider sx={{marginTop:'26px',marginBottom:'20px',width: '50%'}}>OR</Divider>
            <Grid container sx={{ justifyContent: 'center', gap: 2 }}>
                <Grid item>
                    <Button variant='contained' sx={{ minWidth: '129px', backgroundColor: '#4266B2' }}>Facebook</Button>
                </Grid>
                <Grid item>
                    <Button variant='contained' sx={{ minWidth: '119px', backgroundColor: '#E4E4E4', color: 'black' }}>Google</Button>
                </Grid>
            </Grid>
        </Grid>

    )
}

export default Login