import { Grid, IconButton, Typography, TextField, MenuItem, Button, InputAdornment} from '@mui/material'
import React from 'react'
import Book from '../../Images/Book.png'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Cart({onPlaceOrder}) {
  return (
    <Grid container sx={{flexDirection:'column',border:'1px solid #DCDCDC',py:{xs:0,sm:2},px:{xs:0,sm:3}}}>
        <Grid item sx={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',p:1,px:3}}>
            <Typography variant="h6" color="initial" sx={{fontWeight:'bold'}}>My Cart(1)</Typography>
            <TextField
              id="location"
              select
              InputProps={{
                startAdornment: <InputAdornment position="start"><LocationOnIcon sx={{color:'#A03037'}}/></InputAdornment>,
                style:{margin:0}
            }}
            //   value='Use Current Location'
            >
                <MenuItem defaultValue='Use Current Location' selected>Use Current Location</MenuItem>
            </TextField>
        </Grid>
        <Grid item sx={{p:1,px:3}}>
            <Grid container sx={{flexDirection:'column',gap:1}}>
                <Grid item sx={{display:'flex'}}>
                    <Grid item>
                        <img src={Book} alt='book' style={{height:85,objectFit:'contain'}}/>
                    </Grid>
                    <Grid item sx={{marginLeft:5}}>
                        <Grid item>
                            <Typography variant="h6" color="initial" sx={{fontWeight:'bold',lineHeight:0.6}}>Don't Make Me Think</Typography>
                            <Typography variant="body1" color="initial" sx={{fontSize:12,color:'#9D9D9D',marginTop:2,marginBottom:1}}>by Steve Krug</Typography>
                            <Typography variant="body1" color="initial" sx={{display:'flex',fontSize:15,alignItems:'center',fontWeight:'bold'}}>
                                Rs. 1500 
                                <Typography sx={{fontSize:12,textDecoration:'line-through',color:'#9D9D9D',mx:2}}>Rs.2000</Typography>
                            </Typography>
                        </Grid>
                        <Grid item sx={{display:'flex',alignItems:'center',marginTop:3}}>
                            <IconButton size='small' sx={{backgroundColor:'#FAFAFA',border:'1px solid #DBDBDB'}}><RemoveIcon  fontSize='sm'/></IconButton>
                            <TextField sx={{width:'50px',mx:1}}
                            inputProps={{
                                style: {
                                    padding:4,
                                    textAlign:'center',
                                }
                            }}
                            value={1}
                            />
                            <IconButton size='small' sx={{backgroundColor:'#FAFAFA',border:'1px solid #DBDBDB'}}><AddIcon fontSize='sm'/></IconButton>
                            <Typography variant="body1" color="initial" sx={{mx:2}}>Remove</Typography>
                        </Grid>
                    </Grid>

                </Grid>
                <Grid item sx={{alignSelf:'end'}}>
                    <Button variant="contained" sx={{width:150}} onClick={() => onPlaceOrder()}>
                        Place Order
                    </Button>
                </Grid>
            </Grid>            
        </Grid>
    </Grid>
    // <Grid container sx={{flexDirection:'column',border:'1px solid #DCDCDC',py:{xs:0,sm:2},px:{xs:0,sm:3}}}>
    //     <Grid item sx={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',p:1,px:3}}>
    //         <Typography variant="h6" color="initial" sx={{fontWeight:'bold'}}>My Cart(1)</Typography>
    //         <FormControl sx={{width:200 }}>
    //         <Select>
    //             <MenuItem><LocationOnIcon style={{color:'#A03037'}}/>Use current Location</MenuItem>
    //         </Select>
    //         </FormControl>
    //     </Grid>
    //     <Grid item sx={{display:'flex',alignItems:'flex-end',p:1,px:3,justifyContent:'space-between'}}>
    //         <Grid>
    //             <Grid item sx={{display:'flex'}} xs={12}>
    //                 <img src={Book} alt='book' style={{height:85,objectFit:'contain'}}/>
    //                 <Box>
    //                     <Box sx={{fontSize:18,marginLeft:4}}>
    //                         <Typography variant="h6" color="initial" sx={{fontWeight:'bold',lineHeight:0.6}}>Don't Make Me Think</Typography>
    //                         <Typography variant="body1" color="initial" sx={{fontSize:12,color:'#9D9D9D',my:1}}>by Steve Krug</Typography>
    //                         <Typography variant="body1" color="initial" sx={{display:'flex',fontSize:15,alignItems:'center',fontWeight:'bold'}}>
    //                             Rs. 1500 
    //                             <Typography sx={{fontSize:12,textDecoration:'line-through',color:'#9D9D9D',mx:2}}>Rs.2000</Typography>
    //                         </Typography>
    //                     </Box>
    //                     <Box sx={{display:'flex',alignItems:'center',marginLeft:3,my:3}}>
    //                         <IconButton size='small' sx={{backgroundColor:'#FAFAFA',border:'1px solid #DBDBDB'}}><RemoveIcon  fontSize='sm'/></IconButton>
    //                         <TextField sx={{width:'50px',mx:1}}
    //                         inputProps={{
    //                             style: {
    //                                 padding:4,
    //                                 textAlign:'center',
    //                             }
    //                         }}
    //                         value={1}
    //                         />
    //                         <IconButton size='small' sx={{backgroundColor:'#FAFAFA',border:'1px solid #DBDBDB'}}><AddIcon fontSize='sm'/></IconButton>
    //                         <Typography variant="body1" color="initial" sx={{mx:2}}>Remove</Typography>
    //                     </Box>
    //                 </Box>
    //             </Grid>
    //         </Grid>
    //         <Button variant="contained">
    //             Place Order
    //         </Button>
    //     </Grid>
    // </Grid>
  )
}

export default Cart