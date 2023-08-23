import { Box, Divider, Grid, Typography,Button, FormGroup, IconButton, TextField} from '@mui/material'
import React from 'react'
import Book from '../../Images/Book.png'
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FormControl,Rating } from '@mui/material';
import { TextareaAutosize } from '@mui/base';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function BookDetails() {
  return (
    <Box>
        <Grid container sx={{justifyContent:'center',alignItems:'flex-start'}}>
            <Grid item sx={{display:'flex',flexDirection:'column',mx:5}}>
                <Typography component={'div'} sx={{border:'1px solid #D1D1D1',px:3,py:2}}>
                    <img src={Book} alt='Book' style={{height:367}}/>
                </Typography>
                <Box sx={{display:'flex',justifyContent:'space-between',my:3}}>
                    <Button variant='contained' sx={{flexGrow:1,marginRight:'20px',backgroundColor:'#A03037','&:hover':{backgroundColor:'#A03037'}}}>Add to bag</Button>
                    <Box item sx={{display:'flex',alignItems:'center',marginTop:3}}>
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
                    </Box>
                    <Button variant='contained' sx={{display:'inline-flex',alignItems:'center',flexGrow:1,backgroundColor:'#333333','&:hover':{backgroundColor:'#333333'}}}>
                        <FavoriteIcon style={{fontSize:17,margin:'0px 4px'}}/> 
                        Wishlist
                    </Button>
                </Box>
            </Grid>
            <Grid item sx={{px:{xs:2,sm:5}}} xs={12} sm={8} md={6}>
                <Box>
                    <Typography variant="h4" color="initial">
                        Don't Make Me Think
                    </Typography>
                    <Typography variant="h6" color="initial" sx={{color:'#878787'}}>
                        by Steve Krug
                    </Typography>
                    <Typography variant="span" color="text.secondary" component="div" sx={{display:'flex',alignItems:'center',my:1}}>
                        <Typography sx={{display:'flex',alignItems:'center',backgroundColor:'#388E3C',color:'white',px:1}}>
                            4.5
                            <StarIcon fontSize='sm'/>
                        </Typography>
                        <Typography sx={{color:'#878787',fontSize:15,px:1}}>
                            (20)
                        </Typography>
                    </Typography>
                    <Typography variant="span" component="div" sx={{display:'flex',alignItems:'center',my:1,color:'#0A0102',fontWeight:'bold'}}>
                        <Typography sx={{fontSize:30}}>
                            Rs. 1500
                        </Typography>
                        <Typography sx={{fontSize:12,textDecoration:'line-through',color:'#878787',px:1}}>
                            Rs. 2000
                        </Typography>
                    </Typography>
                </Box>
                <Divider sx={{color:'#9D9D9D'}}></Divider>
                    <Typography variant="body1" color="initial" sx={{fontSize:15,color:'#878787'}}>
                        <ul style={{padding:"15px"}}>
                            <li>Book Detail</li>    
                            <Typography variant='body2' sx={{color:'#373434',fontSize:12}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi quam minus ad, corporis at ipsa quae amet cum sequi molestias aliquam earum vero hic voluptatum aspernatur minima veniam consequuntur maxime. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed repudiandae expedita accusamus adipisci numquam deserunt harum magni ea aliquid praesentium ab perferendis facere, quasi ex id est reiciendis perspiciatis ullam!</Typography>
                        </ul>
                    </Typography>
                <Divider sx={{color:'#9D9D9D'}}></Divider>
                <Box>
                    <Typography variant='body2' sx={{fontSize:18,my:2}}>
                        Customer Feedback
                    </Typography>
                    <FormGroup sx={{backgroundColor:'#F5F5F5',p:2}}>
                        <FormControl>
                            <label style={{fontSize:12,color:'#0A0102',margin:'5px 0'}}>Overall rating</label>
                            <Rating name="half-rating" precision={0.5} />
                            <TextareaAutosize minRows={3} placeholder='Write Your Review' style={{border:'none',marginTop:'10px'}}/>
                        </FormControl>
                        <Button variant="contained" color="primary" sx={{textTransform:'none',width:'20%',alignSelf:'end',my:1}}>
                            Submit
                        </Button>
                    </FormGroup>
                </Box>
            </Grid>
        </Grid>
    </Box>
  )
}

export default BookDetails