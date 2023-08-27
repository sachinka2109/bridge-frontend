import { Grid, Typography, TextField, MenuItem, Button, InputAdornment} from '@mui/material'
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CartItem from './CartItem';


function Cart({data,getCart,onPlaceOrder}) {
  return (
    <Grid container sx={{flexDirection:'column',border:'1px solid #DCDCDC',py:{xs:0,sm:2},px:{xs:0,sm:3}}}>
        <Grid item sx={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',p:1,px:3}}>
            <Typography variant="h6" color="initial" sx={{fontWeight:'bold'}}>My Cart({data.length})</Typography>
            <TextField
              id="location"
              select
              InputProps={{
                startAdornment: <InputAdornment position="start"><LocationOnIcon sx={{color:'#A03037'}}/></InputAdornment>,
                style:{margin:0}
            }}
            >
                <MenuItem defaultValue='Use Current Location' selected>Use Current Location</MenuItem>
            </TextField>
        </Grid>
        <Grid item sx={{p:1,px:3}}>
            <Grid container sx={{flexDirection:'column',gap:1}}>
                <Grid item sx={{display:'flex',flexDirection:'column'}}>
                    {data.map(item => (
                        <CartItem  key={data._id} data={item} getCart={getCart}/>
                    ))}
                </Grid>
                <Grid item sx={{alignSelf:'end'}}>
                    <Button variant="contained" sx={{width:150}} onClick={() => onPlaceOrder()}>
                        Place Order
                    </Button>
                </Grid>
            </Grid>            
        </Grid>
    </Grid>
  )
}

export default Cart