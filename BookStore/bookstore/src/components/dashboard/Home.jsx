import React from 'react'
import Header from '../header/Header'
import { Box, Grid, Typography } from '@mui/material'
import BookCard from '../book-component/BookCard';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Home() {
  return (
    <div>
      <Header />  
      <Box sx={{mx:20}}>
        <Typography variant="body1" color="initial" sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <Typography variant="body1" color="initial" sx={{display:'flex',alignItems:'flex-end'}}>
            <Typography variant="body1" color="initial" sx={{fontSize:25}}>
              Books
            </Typography>
            <Typography variant="body2" color="initial" sx={{marginBottom:'5px',color:'#9D9D9D'}}>
              (128 Items)
            </Typography>
          </Typography>
          <Typography variant="body1" color="initial">
            <FormControl sx={{ m: 1, minWidth: 200 }}>
              <Select>
                <MenuItem>Price:Low to High</MenuItem>
                <MenuItem>Price:High to Low</MenuItem>
                <MenuItem>New Arrivals</MenuItem>
              </Select>
            </FormControl>
          </Typography>
        </Typography>
        <Grid container sx={{gap:3,flexWrap:'wrap'}}>
          <Grid item>
            <BookCard />
          </Grid>
          <Grid item>
            <BookCard />
          </Grid>
          <Grid item>
            <BookCard />
          </Grid>
          <Grid item>
            <BookCard />
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default Home