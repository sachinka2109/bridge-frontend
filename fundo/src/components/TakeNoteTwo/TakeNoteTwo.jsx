import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import PushPinIcon from '@mui/icons-material/PushPin';
import TextField from '@mui/material/TextField';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import AddAlertIcon from '@mui/icons-material/AddAlert';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ArchiveIcon from '@mui/icons-material/Archive';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import Button from '@mui/material/Button';
import { useState } from 'react';

function TakeNoteTwo() {
  let [hide,setHide] = useState(false);
  let hideTakeNoteTwo = () => {
    setHide(true);
  }
  return (
    <div>
      <Grid marginTop={'20px'} sx={{display:'flex',justifyContent:'center'}}>
        <Container maxWidth="sm">          
          <form>
            <Paper elevation={3} style={{ border: 'none',padding:'5px 10px 5px 10px',borderRadius:'10px'}}>
                <Typography variant="body1" color="initial" sx={{margin:0,display:'flex',alignItems:'flex-start',justifyContent:'space-between'}} >
                  <TextField variant='standard' id="title" placeholder='Title' fullWidth style={{ outline: 'none' }}   InputProps={{disableUnderline: true}}/>
                  <IconButton aria-label="pin">
                    <PushPinIcon/>
                  </IconButton>
                </Typography >
                <Typography variant="body1" color="initial" sx={{display:'flex',alignItems:'center'}}>
                    <TextField id="notes" variant="standard" placeholder='Take a note...' fullWidth style={{ outline: 'none' }}   InputProps={{disableUnderline: true}}
                    />
                    <>                  
                        <IconButton>
                        <CheckBoxIcon />
                        </IconButton>
                        <IconButton>
                        <InsertPhotoIcon />
                        </IconButton>
                    </>
                </Typography>
                <Typography variant="body1" color="initial" sx={{margin:0,display:'flex',alignItems:'center'}}>
                    <Grid container sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    <Grid item sx={{display:'flex',flexBasis:'350px',justifyContent:'space-between'}}>
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
                        <IconButton size="small">
                        <UndoIcon fontSize='12px'/>
                        </IconButton>
                        <IconButton size="small">
                        <RedoIcon fontSize='12px'/>
                        </IconButton>
                    </Grid>
                    <Grid item sx={{display:'flex',alignSelf:'flex-end'}}>
                        <Button variant="text" sx={{color:'black'}} onClick={hideTakeNoteTwo}>
                          Close
                        </Button>
                    </Grid>
                    </Grid>
                </Typography>
            </Paper>
          </form>
        </Container>
      </Grid>
    </div>
  )
}

export default TakeNoteTwo