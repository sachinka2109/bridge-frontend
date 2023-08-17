import React, { useState } from 'react'
import { TextField, Grid, Button, Link } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './Login.css';

function Signup({changePage}) {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    }
    const handleMouseDownPassword = () => {

    }
    return (
        <Grid container sx={{ justifyContent: 'center', gap: 2, flexDirection: 'column', alignItems: 'center',py:2}}>
            <Grid container sx={{ justifyContent: 'center', gap: 12 }}>
                <Grid item onClick={()=> changePage(false)}> 
                    <Link sx={{ fontSize: '25px', color: '#878787',fontWeight:'bold',textDecoration:'none'}} >
                        LOGIN
                    </Link>
                </Grid>
                <Grid item className='Signup-link'>
                    <Link sx={{ fontSize: '25px', color: '#0A0102',fontWeight:'bold',textDecoration:'none'}}>
                        SIGNUP
                    </Link>
                </Grid>
            </Grid>
            <Grid item>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <label style={{ fontSize: '10px' }}>Full Name</label>
                    <TextField
                        id="fullname"
                        sx={{ width: '252px', height: '35px' }}
                        inputProps={{
                            style: {
                                padding: 6
                            }
                        }}
                    />
                </div>
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
                    </div>
                </FormControl>
            </Grid>
            <Grid item>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <label style={{ fontSize: '10px' }}>Mobile Number</label>
                    <TextField
                        id="fullname"
                        sx={{ width: '252px', height: '35px' }}
                        inputProps={{
                            style: {
                                padding: 6
                            }
                        }}
                    />
                </div>
            </Grid>
            <Grid item>
                <Button variant='contained' sx={{ width: '252px', backgroundColor: '#A03037' }}>
                    Signup
                </Button>
            </Grid>
        </Grid>

    )
}

export default Signup