import React from 'react'
import { Box, Grid, Typography } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton'
import AddAlertIcon from '@mui/icons-material/AddAlert';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import ArchiveIcon from '@mui/icons-material/Archive';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PushPinIcon from '@mui/icons-material/PushPin';
import ColorPalette from '../ColorPalette/ColorPalette';
import MoreOptions from '../MoreOption/MoreOption';



function TakeNoteThree(props) {
  const updatecolor = () => {
    props.getData();
  }
  return (
    <React.Fragment>
      <Grid container sx={{display:'flex',justifyContent:'flex-start'}} xs={12} sm={6} md={4} lg={3}>
        <Grid item sx={{position:'relative',minWidth:'240px'}}>
          <Card variant="outlined" sx={{borderRadius:'10px',backgroundColor:props.data.color}}>
            <Box sx={{position:'absolute',left:'-10px',top:'-5px'}}>
              <CheckCircleIcon></CheckCircleIcon>
            </Box>
            <CardContent>
              <Typography sx={{ fontSize: 18,textAlign:'left',display:'flex',justifyContent:'space-between',alignItems:'center'}} gutterBottom>
                  {props.data.title}
                <IconButton>
                  <PushPinIcon/>
                </IconButton>
              </Typography>
              <Typography sx={{fontSize:20,textAlign:'left' }} >
                {props.data.description}
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
                  {/* <IconButton size="small">
                  <ColorLensIcon fontSize='12px'/>
                  </IconButton> */}
                  <ColorPalette fontSize='12px' action={'edit'} Noteid={props.data.id} updatecolor={updatecolor}/>
                  <IconButton size="small" onClick={() => props.onArchive(props.data)}>
                    <ArchiveIcon fontSize='12px'/>
                  </IconButton>
                  {/* <IconButton size="small">
                    <MoreVertIcon fontSize='12px'/>
                  </IconButton> */}
                  <MoreOptions/>
                </Grid>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default TakeNoteThree