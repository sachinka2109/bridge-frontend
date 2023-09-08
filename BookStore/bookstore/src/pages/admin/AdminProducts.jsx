import React from 'react'
import Home from '../../components/dashboard/Home'
import { Button, Box } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'

function AdminProducts() {
  const navigate = useNavigate();
  const addBook = () => {
    navigate('/admin/add-book')
  }
  return (
    <Box sx={{my:2}}>    
      <Button variant='contained' onClick={addBook} sx={{mx:{xs:4,sm:10,md:15,lg:19}}}>+Add New Book</Button>
      <Home />
    </Box>
  )
}

export default AdminProducts