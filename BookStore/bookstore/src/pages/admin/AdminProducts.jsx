import React from 'react'
import Home from '../../components/dashboard/Home'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

function AdminProducts() {
  return (
    <>    
      <Link to='/admin/add-book'>
        <Button>+Add New Book</Button>
      </Link>
      <Home />
    </>
  )
}

export default AdminProducts