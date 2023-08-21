import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { ReactComponent as Education } from "../../Images/education.svg";
import { Button, ButtonGroup, MenuList } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MarkunreadMailboxIcon from '@mui/icons-material/MarkunreadMailbox';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './Header.css';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '3px',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
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
  borderRadius: '3px',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
  },
  width: '100%',
}));

function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorElProfile, setAnchorElProfile] = React.useState(null);
    const open = Boolean(anchorElProfile);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  
    const handleProfileMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
      handleMobileMenuClose();
    };
  
    const handleMobileMenuOpen = (event) => {
      setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleClick = (event) => {
      setAnchorElProfile(event.currentTarget);
      document.getElementById('profile-btn').classList.remove('active')
    };
    const handleClose = () => {
      setAnchorElProfile(null);
      document.getElementById('profile-btn').classList.add('active')
    };
  
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      </Menu>
    );
  
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <MenuItem>
          <IconButton size="large" aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );
  
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar sx={{display:'flex',justifyContent:'flex-start',alignItems:'center',backgroundColor:'#A03037'}}>
            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton> */}
            <Box sx={{flexBasis:'80px'}}/>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'flex' },alignItems:'center',mx:'42px'}}
            >
              <Education/>
              Bookstore
            </Typography>
            <Search sx={{flexGrow:'2',bgcolor:'background.paper','&:hover':{bgcolor:'background.paper'}}}>
              <SearchIconWrapper>
                <SearchIcon sx={{color:'#9D9D9D'}}/>
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search...'}}
                sx={{color:'#9D9D9D'}}
              />
            </Search>
            <Box sx={{flexGrow:2}}/>
            <Box sx={{ display: { xs: 'none', md: 'flex' }}}>
                <Button variant='contained' sx={{display:'flex',flexDirection:'column',px:3,backgroundColor:'#A03037',
                textTransform:'none','&:hover':{backgroundColor: 'transparent',textDecoration: 'none'}}}
                id="profile-btn"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                className='active'
                >
                  <PersonOutlineIcon />
                  Sachin
                </Button>
                <Menu
                  id="profile-btn-menu"
                  anchorEl={anchorElProfile}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <Typography variant="body1" color="initial" sx={{mx:2,fontSize:12,fontWeight:'bold'}}>Hello Poonam,</Typography>
                  <MenuItem sx={{fontSize:12,'&:hover':{color:'#A03037'}}}><PersonOutlineIcon fontSize='sm' sx={{marginRight:'10px'}}/>Profile</MenuItem>
                  <MenuItem sx={{fontSize:12,'&:hover':{color:'#A03037'}}}><MarkunreadMailboxIcon fontSize='sm' sx={{marginRight:'10px'}}/> My Orders</MenuItem>
                  <MenuItem sx={{fontSize:12,'&:hover':{color:'#A03037'}}}><FavoriteBorderIcon fontSize='sm' sx={{marginRight:'10px'}}/>My Wishlist</MenuItem>
                  <Button variant='outlined' sx={{textTransform:'none',px:4,mx:2,my:1,borderColor:'#A03037',color:'#A03037','&:hover':{color:'#A03037',borderColor:'#A03037'}}}>Logout</Button>
                </Menu>
                <Button variant='contained' sx={{display:'flex',flexDirection:'column',px:4,backgroundColor:'#A03037',
                textTransform:'none','&:hover':{backgroundColor: 'transparent',textDecoration: 'none'}}}
                >
                  <ShoppingCartIcon />
                  Cart
                </Button>
            </Box>
            <Box sx={{flex:'1 0'}}/>
            <Box sx={{ display: { xs: 'flex', md: 'none' }}}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
    );
}

export default Header