import React from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Drawer from '@mui/material/Drawer';
import Header from '../Header/Header';
import './LeftDrawer.css';
import { IconButton } from '@mui/material';
import {connect,useDispatch} from 'react-redux'

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
      sx={{width: state.left ? '280px' : '65px'}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[{text:'Notes',icon: <LightbulbIcon/>},{text:'Remainder',icon: <NotificationsIcon/>},{text:'Edit Label',icon: <EditIcon/>},{text:'Archive',icon: <ArchiveIcon/>},{text:'Trash',icon: <DeleteIcon/>}]
        .map(({text,icon}, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onMouseOver={() => setState({left: true})}>
              <IconButton size='large'>
                {icon}
              </IconButton>
              <ListItemText primary={text} sx={{marginLeft:'20px'}}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  let handleOpen = () => {
    setState({...state,left:!state.left});
  }

  let dispatch = useDispatch();
  const handleTitleUpdate = (text) => {
    dispatch({type:text})
  }

  return (
    <div>  
      <div className='drawer-container'>
        <Header handleOpen={handleOpen} toggleView={props.onButtonClick}></Header> 
        <Box onMouseLeave={() => setState({left: false})}>
          <Drawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer(false)}
            variant="permanent" 
            PaperProps={{
              sx:{
                top:'65px',
                border:'none'
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