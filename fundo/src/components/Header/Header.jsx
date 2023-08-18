import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircle from '@mui/icons-material/AccountCircle';
import AppsIcon from '@mui/icons-material/Apps';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import GridViewIcon from '@mui/icons-material/GridView';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Divider } from '@mui/material';
// import {getUserData} from '../../services/userFunction'
// import ButtonGroup from '@mui/material/ButtonGroup';
// import Logout from '@mui/icons-material/Logout';
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import Paper from '@mui/material/Paper';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#f1f3f4',
    '&:focus': {
        backgroundColor:'white',
    },
    width: '100%', 
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
    },
    width: '100%',
  }));


function Header(props) {
    const data = localStorage.getItem('userId');
    // useEffect(()=> {
    //     async function userData() {
    //         if(localStorage.getItem('userId')) {
    //             await getUserData(data);
    //         }
    //     }
    //     userData();
    // },[])
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [hide,setHide] = useState(true);
    const open = Boolean(anchorEl);
    // const location = window.location.href;
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    let showListView = () => {
        setHide(!hide);
        props.toggleView();
    }

    let onSignOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        navigate('/') 
    }

    const openSearchBar = () => {
        
    }
    

  return (
    <React.Fragment>
        <Box sx={{ flexGrow: 1 }} >
            <AppBar  elevation={0} sx={{position:"static",borderBottom:'1px solid #dadce0'}}>
                <Toolbar sx={{ display: 'flex', alignItems: 'center',backgroundColor:'white',color:'#5f6368'}}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 1 }}
                        onClick={props.handleOpen}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component={'span'}
                        sx={{ display: { xs:'flex',alignItems:'center' }}}
                        width={'13vw'}
                    >
                        {/* {location.includes('dashboard') ? ( */}
                        <React.Fragment>
                            <img
                            className="gb_Rc gb_Rd"
                            src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
                            srcSet="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png 1x, https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png 2x "
                            alt=""
                            aria-hidden="true"
                            role="presentation"
                            style={{ width: '40px', height: '40px' }}
                            />
                            {props.title}
                        </React.Fragment>
                        {/* ) : location.includes('archive') ? (
                        'Archive'
                        ) : location.includes('trash') ? (
                        'Trash'
                        ) : null} */}
                    </Typography>
                    <Box sx={{flexGrow:1,marginRight:'10vw'}}>
                        <Search sx={{flexGrow:1,display:{xs:'none',md:'flex'},justifyContent:'flex-start',alignItems:'center',borderRadius:'10px',padding:'5px',bgcolor: "background.paper",boxShadow:' 0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)'}}>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            value={props.searchText} onChange={(e) => props.setSearchText(e.target.value)}
                            />
                        </Search>
                    </Box>
                    <Box sx={{ display: 'flex',justifyContent:'flex-end'}}>
                        <IconButton size="large"  color="inherit" sx={{display:{xs:'flex',md:'none'}}} onClick={openSearchBar}>
                            <SearchIcon />
                        </IconButton>
                        <IconButton size="large"  color="inherit">
                            <RefreshIcon />
                        </IconButton>
                        <IconButton size="large"  color="inherit" sx={{display:{xs:'none',md:'flex'}}} onClick={showListView}>
                            {hide? <ViewStreamIcon /> : <GridViewIcon />}
                        </IconButton>
                        <IconButton size="large"  color="inherit">
                            <SettingsIcon />
                        </IconButton>
                        <IconButton size="large"  color="inherit">
                            <AppsIcon />
                        </IconButton>
                        <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        aria-haspopup="true"
                        color="inherit"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        >
                            <AccountCircle />   
                        </IconButton>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                            >
                            {/* <MenuItem sx={{display:'flex',justifyContent:'center',fontSize:'14px',mx:10}}>
                                sachinkaythamwar@gmail.com
                            </MenuItem>
                            <MenuItem sx={{display:'flex',justifyContent:'center'}}>
                                <AccountCircle fontSize='large'/>   
                            </MenuItem>
                            <div style={{display:'flex',justifyContent:'center',margin:'5px'}}>
                                Hi, Sachin!
                            </div>
                            <div style={{display:'flex',justifyContent:'center',margin:'5px'}}>
                                <Button variant="outlined" color="primary" sx={{borderRadius:'20px',fontSize:'10px',textTransform:'none',borderColor:'#747775'}}>
                                    Manage Your Google Account
                                </Button>
                            </div>
                            <div style={{display:'flex',justifyContent:'center',alignItems:'center',margin:'20px'}}>
                                <ButtonGroup variant="outlined" aria-label="outlined button group">
                                    <Button sx={{borderRadius:'20px',fontSize:'14px',textTransform:'none',p:2,display:'flex',alignItems:'center'}}>
                                        <AddCircleOutlineIcon/> 
                                        <div>Add account</div>
                                    </Button>
                                    <Button onClick={onSignOut} sx={{borderRadius:'20px',fontSize:'14px',textTransform:'none',p:2,display:'flex',alignItems:'center'}}>
                                        <Logout/>
                                        <div>Sign out</div>
                                    </Button>
                                </ButtonGroup>
                            </div> */}
                            <MenuItem sx={{display:'flex'}}>
                                <AccountCircle fontSize='large'/>
                                sachinkaythamwar@gmail.com
                            </MenuItem>
                            <Divider></Divider>
                            <MenuItem sx={{justifyContent:'center'}}>
                                Sign out
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
    return {
      title: state.navReducer.title 
    };
};

export default connect(mapStateToProps)(Header)