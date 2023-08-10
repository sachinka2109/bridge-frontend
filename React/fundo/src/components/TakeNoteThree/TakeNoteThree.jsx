import React from 'react'
import { Box, Grid, Typography } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton'
import AddAlertIcon from '@mui/icons-material/AddAlert';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ArchiveIcon from '@mui/icons-material/Archive';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PushPinIcon from '@mui/icons-material/PushPin';

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 16,textAlign:'left'}} gutterBottom>
        Title
      </Typography>
      <Typography sx={{fontSize:14,textAlign:'left' }} >
        well meaning and kindly.
      </Typography>
    </CardContent>
    <CardActions sx={{display:'flex',flexGrow:1,justifyContent:'space-between'}}>
      <Grid container sx={{display:'flex',flexGrow:1,justifyContent:'space-between'}}>
        <Grid item sx={{display:'flex',flexGrow:1,justifyContent:'space-between'}}>
          <IconButton size="small">
          <AddAlertIcon fontSize='12px'/>
          </IconButton>
          <IconButton size="small"> 
          <PersonAddAlt1Icon fontSize='12px'/>
          </IconButton>
          <IconButton size="small">
          <ColorLensIcon fontSize='12px'/>
          </IconButton>
          <IconButton size="small">
          <ArchiveIcon fontSize='12px'/>
          </IconButton>
          <IconButton size="small">
          <MoreVertIcon fontSize='12px'/>
          </IconButton>
        </Grid>
      </Grid>
    </CardActions>
  </React.Fragment>
);



function TakeNoteThree() {
  return (
    <Grid container sx={{display:'flex',justifyContent:'center'}}>
      <Grid item sx={{position:'relative',minWidth:'300px'}}>
        <Card variant="outlined" sx={{borderRadius:'10px'}}>
          <Box sx={{position:'absolute',left:'-10px',top:'-5px'}}>
            <CheckCircleIcon></CheckCircleIcon>
          </Box>
          <Box item sx={{display:'flex',flexGrow:1,margin:'10px',justifyContent:'flex-end'}}>
            <PushPinIcon/>
          </Box>
          {card}
        </Card>
      </Grid>
    </Grid>
  )
}

export default TakeNoteThree