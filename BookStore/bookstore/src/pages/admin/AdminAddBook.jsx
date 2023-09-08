import React from 'react'
import EditBook from '../../components/edit-book/EditBook'
import { Box } from '@mui/material'

function AdminAddBook() {
  return (
    <Box sx={{display:'flex',justifyContent:'center',my:5}}>
      <EditBook/>
    </Box>
  )
}

export default AdminAddBook