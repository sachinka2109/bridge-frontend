import React, { useState } from 'react'
import { TextField, Grid, Button, Link} from '@mui/material'
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './Login.css';
import { Link as Linky } from 'react-router-dom';
import { userSignUp } from '../../services/userService';

function Signup({changePage}) {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    }
    const handleMouseDownPassword = () => {

    }
    const [data,setData] = useState({
        fullName: '',
        email: '',
        password:'', 
        phone:''
    })
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.id]: e.target.value 
        })
    }
    const onSignUp = async() =>{ 
        // localStorage.setItem('token',response.data.id)
        let response = await userSignUp(data)
        console.log(response)
        window.location.reload();
    }
    
    return (
        <Grid container sx={{ justifyContent: 'center', gap: 2, flexDirection: 'column', alignItems: 'center',py:2}}>
            <Grid container sx={{ justifyContent: 'center', gap: 12 }}>
                <Grid item onClick={()=> {changePage(false)}} className='Login-link'> 
                    <Linky to={'/login'} style={{textDecoration:'none'}}>                
                        <Link sx={{ fontSize: '25px', color: '#878787',fontWeight:'bold',textDecoration:'none'}} >
                            LOGIN
                        </Link>
                    </Linky>
                </Grid>
                <Grid item className='Signup-link active'>
                    <Link sx={{ fontSize: '25px', color: '#0A0102',fontWeight:'bold',textDecoration:'none'}}>
                        SIGNUP
                    </Link>
                </Grid>
            </Grid>
            <Grid item>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <label style={{ fontSize: '10px' }}>Full Name</label>
                    <TextField
                        id="fullName"
                        sx={{ width: '252px', height: '35px' }}
                        inputProps={{
                            style: {
                                padding: 6
                            }
                        }}
                        value={data.fullName}
                        onChange={handleChange}
                    />
                </div>
            </Grid>
            <Grid item>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <label style={{ fontSize: '10px' }} htmlFor='email'>Email Id</label>
                    <TextField
                        id="email"
                        name='email'
                        sx={{ width: '252px', height: '35px' }}
                        inputProps={{
                            style: {
                                padding: 6
                            }
                        }}
                        value={data.email}
                        onChange={handleChange}
                    />
                </div>
            </Grid>
            <Grid item sx={{marginTop:'3px',marginBottom:'14px'}}>
                <FormControl sx={{ m: 1, width: '252px', height: '35px' }} variant="outlined">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <label style={{ fontSize: '10px' }} htmlFor='passwordInput'>Password</label>
                        <OutlinedInput
                            value={data.password}
                            onChange={handleChange}
                            id="password"
                            name='password'
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
                        id="phone"
                        sx={{ width: '252px', height: '35px' }}
                        inputProps={{
                            style: {
                                padding: 6
                            }
                        }}
                        value={data.phone}
                        onChange={handleChange}
                    />
                </div>
            </Grid>
            <Grid item>
                <Button variant='contained' sx={{ width: '252px', backgroundColor: '#A03037' }} onClick={onSignUp}>
                    Signup
                </Button>
            </Grid>
        </Grid>

    )
}

export default Signup