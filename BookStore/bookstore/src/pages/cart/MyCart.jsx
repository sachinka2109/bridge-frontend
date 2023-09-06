import React, {useEffect, useState } from 'react'
import Cart from '../../components/cart-component/Cart'
import CartCustomerDetails from '../../components/cart-component/CartCustomerDetails'
import { Grid, Typography,Button,Breadcrumbs } from '@mui/material'
import CartOrderSummary from '../../components/cart-component/CartOrderSummary'
import { updateUser } from '../../services/userService'
import { getCartItems } from '../../services/dataService'
import { Link } from 'react-router-dom'
import {connect ,useDispatch } from 'react-redux'

function MyCart() {
  const [toggleCustomerDetails,setToggleCustomerDetails] = useState(false)
  const [toggleOrderSummary,setToggleOrderSummary] = useState(false)
  const [data,setData] = useState([]);
  const dispatch = useDispatch()
  
  const onPlaceOrder = () => {
    setToggleCustomerDetails(true);
  }
  const onContinue = async(data) => {
    setToggleOrderSummary(true);
    await updateUser(data)
  }

  const getCart = async() => {
    let response = await getCartItems();
    console.log(response)
    setData(response.data.result);
    console.log('myCartItems')
    dispatch({type:'GET_CART_ITEMS',payload:response.data.result})
  }
  
  useEffect(() => {
    getCart();
  },[])

  return (
    <>
    <Breadcrumbs aria-label="breadcrumb" sx={{mx:'11%',my:2}}>
      <Link to='/' sx={{textDecoration:'none',color:'#9D9D9D'}}>
          Home
      </Link>
      <Typography color="text.primary">My Cart</Typography>
    </Breadcrumbs>
    <Grid container sx={{mx:{xs:0,sm:11,md:17},p:1}}>
      {
        data.length === 0 ? (
          <>
            <Grid item >
              <Typography variant="h6" color="initial" sx={{fontWeight:'bold',lineHeight:1}}>Your Cart is Empty</Typography>
              <Typography variant="body1" color="initial" sx={{fontSize:12,color:'#9D9D9D',marginTop:2,marginBottom:1}}>Add items to your Cart</Typography>
              <Link to='/'>
                <Button variant='contained'>Shop now</Button>
              </Link>
            </Grid>
          </>
        ) : (
          <>
            <Grid item sx={{my:1}} xs={12} sm={10} md={9} lg={7}>
              <Cart data={data} getCartItem={getCart} onPlaceOrder={onPlaceOrder} />
            </Grid>
            <Grid item sx={{my:1}} xs={12} sm={10} md={9} lg={7}>
              <CartCustomerDetails toggleCustomerDetails={toggleCustomerDetails} onContinue={onContinue}/>
            </Grid>
            <Grid item sx={{my:1}} xs={12} sm={10} md={9} lg={7}>
              <CartOrderSummary data={data} toggleOrderSummary={toggleOrderSummary} getCartItem={getCart}/>
            </Grid>
          </>
        )
      }
    </Grid>
    </>
  )
}

export default connect()(MyCart)