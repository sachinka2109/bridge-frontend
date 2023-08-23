import React from 'react'
import { Grid, Typography } from '@mui/material'
import BookCard from '../book-component/BookCard';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Pagination from '@mui/material/Pagination'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Grid container sx={{width:'100%',justifyContent:'center'}}>
        <Grid item sx={{width:'100%'}}>
          <Typography variant="body1" color="initial" sx={{display:'flex',alignItems:'center',justifyContent:'space-between',mx:{xs:0,sm:10,md:22}}}>
            <Typography variant="body1" color="initial" sx={{fontSize:25,display:'flex',alignItems:'center'}}>
              Books
              <Typography variant="body1" color="initial" sx={{fontSize:12,color:'#9D9D9D'}}>
                (128 Items)
              </Typography>
            </Typography>
            <FormControl sx={{ m: 1, minWidth: 200 }}>
              <Select>
                <MenuItem>Price:Low to High</MenuItem>
                <MenuItem>Price:High to Low</MenuItem>
                <MenuItem>New Arrivals</MenuItem>
              </Select>
            </FormControl>
          </Typography>
        </Grid>
        <Grid item sx={{width:'80%'}}>
          <Grid container sx={{gap:3,flexWrap:'wrap',justifyContent:'center'}}>
            <Link to='/book-details' style={{textDecoration:'none'}}>
              <Grid item>
                <BookCard />
              </Grid>
            </Link>
          </Grid>
        </Grid>
        <Pagination count={10} variant="outlined" shape="rounded" sx={{color:'#8F2B2F',my:5}}/>
      </Grid>
    </div>
  )
}

export default Home