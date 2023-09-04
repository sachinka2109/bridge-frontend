import { Divider, Grid, Typography } from '@mui/material'
import React, { useEffect, useState,useRef } from 'react'
import CartItem from '../cart-component/CartItem'
import { getWishList } from '../../services/dataService'

function MyWishlist() {
    const [data,setData] = useState([]);
    const getWishlistData = async() =>{
        let response = await getWishList();
        console.log('wishlist',response)
        setData(response.data.result.filter(item => item.product_id !== null))
    }

    useEffect(()=> {
        getWishlistData();
    },[])
  return (
    <Grid sx={{my:8,mx:{xs:1,sm:5,md:19}}}>
        <Grid container sx={{border:'1px solid #E4E4E4'}}>
            <Grid item sx={{backgroundColor:'#F5F5F5',px:4,py:2}} xs={12}>
                <Typography variant="h5" color="initial">My Wishlist({data.length})</Typography>
            </Grid>
            <Grid item sx={{width:'100%'}}>
                {data.map(item => {
                    return (
                        <div>
                            <div style={{padding:40}}>
                                <CartItem key={data._id}  data={item} getCart={getWishlistData} myRef={useRef}/>
                            </div>
                            <Divider></Divider>
                        </div>
                    )
                })}
            </Grid>
        </Grid>
    </Grid>
  )
}

export default MyWishlist