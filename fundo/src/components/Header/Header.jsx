import React from 'react'
import { styled, alpha } from '@mui/material/styles';
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
import { useNavigate } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#f1f3f4',
    '&:focus': {
        backgroundColor:'white',
    },
    width: '100%', // Take the whole width
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

function Header() {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        sessionStorage.removeItem('id')
        navigate('/signin')
    } 
  return (
    <div>
        <Box sx={{ flexGrow: 1 }} >
            <AppBar position="static" >
                <Toolbar sx={{ display: 'flex', alignItems: 'center',backgroundColor:'white',color:'#5f6368'}}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 1 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs:'flex',alignItems:'center' },flexGrow:1 }}
                        width={'20vw'}
                    >
                        <img className="gb_Rc gb_Rd" src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" srcSet="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png 1x, https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png 2x " alt="" aria-hidden="true" role="presentation" style={{width:'40px',height:'40px'}}></img>
                        Keep
                    </Typography>
                    <Search sx={{flexGrow:1,display:{xs:'none',lg:'flex'},justifyContent:'flex-start',mx:5}}>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Box sx={{ display: 'flex',justifyContent:'flex-end'}}>
                        <IconButton size="large"  color="inherit" sx={{display:{xs:'flex',lg:'none'}}}>
                            <SearchIcon />
                        </IconButton>
                        <IconButton size="large"  color="inherit">
                            <RefreshIcon />
                        </IconButton>
                        <IconButton size="large"  color="inherit" sx={{display:{xs:'none',md:'flex'}}}>
                            <ViewStreamIcon />
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
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    </div>
  )
}

export default Header