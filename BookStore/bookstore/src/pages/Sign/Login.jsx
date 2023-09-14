import React, { useState } from 'react'
import { TextField, Grid, Button,Link } from '@mui/material'
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './Signup.css';
import {Link as Linky, useNavigate } from 'react-router-dom';
import { userLogin } from '../../services/userService';
import { adminUserLogin } from '../../services/adminService';

function Login({changePage}) {
    const navigate = useNavigate();
    const emailRegex = /^[a-z]{3,}(.[0-9a-z]*)?@([a-z]){2,}.[a-z]+(.in)*$/;
    const passwordRegex = /^.*(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/;
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    }
    const handleMouseDownPassword = () => {

    }
    const [data,setData] = useState({
        email: '',
        password:'', 
    })

    const [checkError, setCheckError] = React.useState({
        EmailTrue: false,
        EmailError: '',
        PasswordTrue: false,
        PasswordError: ''
    })

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.id]: e.target.value 
        })
    }
    const onLogin = async() =>{ 
        let emailTest = emailRegex.test(data.email);
        let passwordTest = passwordRegex.test(data.password);
        if(emailTest === false) {
            setCheckError({
                EmailTrue: true,
                EmailError: 'Please Enter valid Email'
            })
        } else if(passwordTest === false) {
            setCheckError({
                PasswordTrue: true,
                PasswordError: 'Incorrect Password'
            })
        }
        if(emailTest === true && passwordTest === true) {
            if(window.location.href.includes('signin')) {
                let response = await userLogin(data)
                console.log(response)
                localStorage.setItem('token',response.data.result.accessToken)
                navigate('/')
            }
            else if(window.location.href.includes('admin-login')) { 
                let response = await adminUserLogin(data)
                console.log(response)
                localStorage.setItem('admin-token',response.data.result.accessToken)
                navigate('/admin/products')
            }
        }
    }
    return (
        <Grid container sx={{ justifyContent: 'center', gap: 2, flexDirection: 'column', alignItems: 'center',py:2}}>
            <Grid container sx={{ justifyContent: 'center', gap: 12 }}>
                <Grid item className='Login-link active'> 
                    <Link sx={{ fontSize: '25px', color: '#0A0102',fontWeight:'bold',textDecoration:'none'}} >
                        LOGIN
                    </Link>
                </Grid>
                <Grid item onClick={()=> {changePage(true)}} className='Signup-link'>
                    <Link component={Linky} to={window.location.href.includes('admin-login') ? '/admin-signup' : '/signup'} style={{textDecoration:'none',fontSize: '25px', color: '#0A0102',fontWeight:'bold',textDecoration:'none'}}>         
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
                        value={data.email}
                        onChange={handleChange}
                        error={checkError.EmailTrue}
                    />
                    {checkError.EmailTrue && (
                        <div style={{ fontSize: '12px', color: 'red' }}>{checkError.EmailError}</div>
                    )}
                </div>
            </Grid>
            <Grid item sx={{marginTop:'3px',marginBottom:'14px'}}>
                <FormControl sx={{ m: 1, width: '252px', height: '35px' }} variant="outlined">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <label style={{ fontSize: '10px' }}>Password</label>
                        <OutlinedInput
                            value={data.password}
                            onChange={handleChange}
                            error={checkError.PasswordTrue}
                            id="password"
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
                        {checkError.PasswordTrue && (
                            <div style={{ fontSize: '12px', color: 'red' }}>{checkError.PasswordError}</div>
                        )}
                        <label style={{ fontSize: '10px',alignSelf:'flex-end',color:'#9D9D9D'}}><Link component={Linky} to='/forgotpassword' style={{textDecoration:'none',color:'#9D9D9D'}}>Forgot Password?</Link></label>
                    </div>
                </FormControl>
            </Grid>
            <Grid item>
                <Button type='submit' variant='contained' sx={{ width: '252px', backgroundColor: '#A03037' }} onClick={onLogin}>
                    Login
                </Button>
            </Grid>
            <Divider sx={{marginTop:'26px',marginBottom:'20px',width: '50%'}}>OR</Divider>
            <Grid container sx={{ justifyContent: 'center', gap: 2 }}>
                <Grid item>
                    <Button variant='contained' sx={{ minWidth: '129px', backgroundColor: '#4266B2','&:hover':{backgroundColor: '#4266B2'}}}>Facebook</Button>
                </Grid>
                <Grid item>
                    <Button variant='contained' sx={{ minWidth: '119px', backgroundColor: '#E4E4E4', color: 'black','&:hover':{backgroundColor: '#E4E4E4'} }}>Google</Button>
                </Grid>
            </Grid>
        </Grid>

    )
}

export default Login