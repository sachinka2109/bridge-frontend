import React from 'react'
import { Grid, Typography, Button} from '@mui/material'
import Book from '../../Images/Book.png'

function CartOrderSummary() {
  return (
    <Grid container sx={{flexDirection:'column',border:'1px solid #DCDCDC',py:{xs:0,sm:2},px:{xs:0,sm:3}}}>
        <Grid item sx={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',p:1,px:3}}>
            <Typography variant="h6" color="initial" sx={{fontWeight:'bold'}}>Order Summary</Typography>
        </Grid>
        <Grid item sx={{p:1,px:3}}>
            <Grid container sx={{flexDirection:'column',gap:1}}>
                <Grid item sx={{display:'flex'}}>
                    <Grid item>
                        <img src={Book} alt='book' style={{height:85,objectFit:'contain'}}/>
                    </Grid>
                    <Grid item sx={{marginLeft:5}}>
                        <Typography variant="h6" color="initial" sx={{fontWeight:'bold'}}>Don't Make Me Think</Typography>
                        <Typography variant="body1" color="initial" sx={{fontSize:12,color:'#9D9D9D',my:1}}>by Steve Krug</Typography>
                        <Typography variant="body1" color="initial" sx={{display:'flex',fontSize:15,alignItems:'center',fontWeight:'bold'}}>
                            Rs. 1500 
                            <Typography sx={{fontSize:12,textDecoration:'line-through',color:'#9D9D9D',mx:2}}>Rs.2000</Typography>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item sx={{alignSelf:'end'}}>
                    <Button variant="contained" sx={{width:150}}>
                        Checkout
                    </Button>
                </Grid>
            </Grid>            
        </Grid>
    </Grid>
  )
}

export default CartOrderSummary