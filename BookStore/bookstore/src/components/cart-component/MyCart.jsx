import React, { useState } from 'react'
import Cart from './Cart'
import CartCustomerDetails from './CartCustomerDetails'
import { Grid } from '@mui/material'
import CartOrderSummary from './CartOrderSummary'

function MyCart() {
  const [toggleCustomerDetails,setToggleCustomerDetails] = useState(false)
  const [toggleOrderSummary,setToggleOrderSummary] = useState(false)
  const onPlaceOrder = () => {
    setToggleCustomerDetails(true);
  }
  const onContinue = () => {
    setToggleOrderSummary(true);
  }
  return (
    <Grid container sx={{mx:{xs:0,sm:11,md:22},p:1}}>
        <Grid item sx={{my:1}} xs={12} sm={10} md={9} lg={7}>
            <Cart onPlaceOrder={onPlaceOrder}/>
        </Grid>
        <Grid item sx={{my:1}} xs={12} sm={10} md={9} lg={7}>
            <CartCustomerDetails toggleCustomerDetails={toggleCustomerDetails} onContinue={onContinue}/>
        </Grid>
        <Grid item sx={{my:1}} xs={12} sm={10} md={9} lg={7}>
            <CartOrderSummary toggleOrderSummary={toggleOrderSummary}/>
        </Grid>
    </Grid>
  )
}

export default MyCart