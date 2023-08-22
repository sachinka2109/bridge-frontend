import { Box, Grid, ImageListItem, List, ListItem, Typography } from '@mui/material'
import React from 'react'
import Book from '../../Images/Book.png'
import CircleIcon from '@mui/icons-material/Circle';

function MyOrder() {
  return (
    <Grid container sx={{justifyContent:'center'}}>
        <Grid item xs={9}>
            <List>
                <ListItem sx={{border:'1px solid #E4E4E4',p:4,display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:2}}>
                    <Box sx={{display:'flex'}}>
                        <ImageListItem>
                            <img src={Book} alt="" style={{height:65,objectFit:'contain'}}/>
                        </ImageListItem>
                        <Box sx={{mx:2}}>
                            <Typography variant="body1" color="initial" sx={{fontSize:18}}>Don't Make Me Think</Typography>
                            <Typography variant="body1" color="initial" sx={{fontSize:12,color:'#9D9D9D'}}>by Steve Krug</Typography>
                            <Typography variant="body1" color="initial" sx={{display:'flex',fontSize:15,alignItems:'center',fontWeight:'bold'}}>
                                Rs. 1500 
                                <Typography sx={{fontSize:12,textDecoration:'line-through',color:'#9D9D9D'}}>Rs.2000</Typography>
                            </Typography>
                        </Box>
                    </Box> 
                    <Box>
                        <Typography variant="body1" color="initial" sx={{display:'flex',alignItems:'center'}}>
                            <CircleIcon style={{fontSize:10,color:'green'}}/>
                            Order Placed on May21
                        </Typography>
                    </Box>
                </ListItem>
                <ListItem sx={{border:'1px solid #E4E4E4',p:4,display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}>
                    <Box sx={{display:'flex'}}>
                        <ImageListItem>
                            <img src={Book} alt="" style={{height:65,objectFit:'contain'}}/>
                        </ImageListItem>
                        <Box sx={{mx:2}}>
                            <Typography variant="body1" color="initial" sx={{fontSize:18}}>Don't Make Me Think</Typography>
                            <Typography variant="body1" color="initial" sx={{fontSize:12,color:'#9D9D9D'}}>by Steve Krug</Typography>
                            <Typography variant="body1" color="initial" sx={{display:'flex',fontSize:15,alignItems:'center',fontWeight:'bold'}}>
                                Rs. 1500 
                                <Typography sx={{fontSize:12,textDecoration:'line-through',color:'#9D9D9D'}}>Rs.2000</Typography>
                            </Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Typography variant="body1" color="initial" sx={{display:'flex',alignItems:'center'}}>
                            <CircleIcon style={{fontSize:10,color:'green'}}/>
                            Order Placed on May21
                        </Typography>
                    </Box>
                </ListItem>
            </List>
        </Grid>
    </Grid>
  )
}

export default MyOrder