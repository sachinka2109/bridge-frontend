import React from 'react'
import { Grid, Typography, TextField, FormControl, Button, FormLabel, RadioGroup, FormControlLabel, Radio} from '@mui/material'


function CartCustomerDetails({toggleCustomerDetails,onContinue}) {

  return (
    <Grid container sx={{flexDirection:'column',border:'1px solid #DCDCDC',py:{xs:0,sm:2},px:{xs:0,sm:3}}}>
        <Grid item sx={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',p:1,px:3}}>
            <Typography variant="h6" color="initial" sx={{fontWeight:'bold'}}>Customer Details</Typography>
            { toggleCustomerDetails && (
                <Button variant="outlined" sx={{textTransform:'none',color:'#A03037',borderColor:'#A03037','&:hover':{color:'#A03037',borderColor:'#A03037'}}}>
                    Add New Address
                </Button>
            )}
        </Grid>
        {toggleCustomerDetails && (
            <Grid item sx={{p:1,px:3}}>
                <Grid container sx={{flexDirection:'column',gap:1}}>
                    <Grid item sx={{display:'flex',gap:1,flexWrap:'wrap'}}>
                        <FormControl sx={{width:{xs:'100%',sm:'35%'}}}>
                            <FormLabel htmlFor="fullname">FullName</FormLabel>
                            <TextField inputProps={{style:{padding:5}}} id="fullname" fullWidth/>
                        </FormControl>
                        <FormControl sx={{width:{xs:'100%',sm:'35%'}}}>
                            <FormLabel htmlFor="mobileNumber">Mobile Number</FormLabel>
                            <TextField inputProps={{style:{padding:5}}} id="mobileNumber" fullWidth/>
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <FormControl sx={{width:{xs:'100%',sm:'71.5%'}}}>
                            <FormLabel htmlFor="address">Address</FormLabel>
                            <TextField inputProps={{style:{padding:5}}} id="address" multiline rows={2} fullWidth/>
                        </FormControl>
                    </Grid>
                    <Grid item sx={{display:'flex',gap:1,flexWrap:'wrap'}}>
                        <FormControl sx={{width:{xs:'100%',sm:'35%'}}}>
                            <FormLabel htmlFor="city">city/town</FormLabel>
                            <TextField inputProps={{style:{padding:5}}} id="city" fullWidth/>
                        </FormControl>
                        <FormControl sx={{width:{xs:'100%',sm:'35%'}}}>
                            <FormLabel htmlFor="state">State</FormLabel>
                            <TextField inputProps={{style:{padding:5}}} id="state" fullWidth/>
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <FormControl sx={{width:'100%'}}>
                            <FormLabel id="demo-row-radio-buttons-group-label">Type</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="home" control={<Radio />} label="Home" />
                                <FormControlLabel value="work" control={<Radio />} label="Work" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Button variant="contained" sx={{alignSelf:'end',width:150}} onClick={() => onContinue()}>
                        Continue
                    </Button>
                </Grid>            
            </Grid>
        )}
    </Grid>
 )
}

export default CartCustomerDetails  