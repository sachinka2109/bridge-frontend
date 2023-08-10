import React from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Drawer from '@mui/material/Drawer';
import Header from '../Header/Header';
import './LeftDrawer.css';

function LeftDrawer(props) {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width:'280px'}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[{text:'Notes',icon: <LightbulbIcon/>},{text:'Remainder',icon: <NotificationsIcon/>},{text:'Edit Label',icon: <EditIcon/>},{text:'Archive',icon: <ArchiveIcon/>},{text:'Trash',icon: <DeleteIcon/>}]
        .map(({text,icon}, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  let handleOpen = () => {
    setState({...state,left:!state.left});
  }

  return (
    <div>  
      <div className='drawer-container'>
        <Header handleOpen={handleOpen} toggleView={props.onButtonClick}></Header> 
        <Box>
          <Drawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer(false)}
            variant="persistent" 
            PaperProps={{
              sx:{
                position:'fixed',
                top:'65px',
                paddingLeft:'8px'
              }
            }}
          >
            {list('left')}
          </Drawer>
        </Box>
      </div>
    </div>
  );
}


export default LeftDrawer