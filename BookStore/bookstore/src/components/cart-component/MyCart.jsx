import React from 'react'
import Cart from './Cart'
import CartCustomerDetails from './CartCustomerDetails'
import { Grid } from '@mui/material'
import CartOrderSummary from './CartOrderSummary'

function MyCart() {
  return (
    <Grid container sx={{mx:{xs:0,sm:11,md:22},p:1}}>
        <Grid item sx={{my:1}} xs={12} sm={10} md={9} lg={7}>
            <Cart />
        </Grid>
        <Grid item sx={{my:1}} xs={12} sm={10} md={9} lg={7}>
            <CartCustomerDetails />
        </Grid>
        <Grid item sx={{my:1}} xs={12} sm={10} md={9} lg={7}>
            <CartOrderSummary />
        </Grid>
    </Grid>
  )
}

export default MyCart