import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import { Container, Paper } from '@mui/material';


function TakeNoteOne() {
  let [hide,setHide] = useState(false);
  let hideTakeNoteOne = () => {
    setHide(true);
  }
  return (
    <div>
      {!hide && (
        <Container maxWidth='sm'>
          <Paper elevation={3} style={{ border: 'none',padding:'5px 10px 5px 10px',borderRadius:'10px'}}>
            <Typography variant="body1" color="initial" sx={{display:'flex',alignItems:'center'}}>
                <TextField id="notes" variant="standard" placeholder='Take a note...' fullWidth style={{ outline: 'none' }}  InputProps={{disableUnderline: true}} onFocus={hideTakeNoteOne}/>
                <>                  
                  <IconButton>
                  <CheckBoxIcon />
                  </IconButton>
                  <IconButton>
                  <InsertPhotoIcon />
                  </IconButton>
                </>
            </Typography>
          </Paper>
        </Container>
      )}
    </div>
  )
}

export default TakeNoteOne