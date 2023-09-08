import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import { ReactComponent as Education } from "../../Images/education.svg";
import { Badge } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MarkunreadMailboxIcon from "@mui/icons-material/MarkunreadMailbox";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./Header.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getCartItems } from "../../services/dataService";
import { useEffect } from "react";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  StyledMenuItem,
  StyledHeaderToolbar,
  StyledHeaderLogoLink,
  StyledHeaderLogoTypography,
  StyledMenuLink,
  StyledLogoutBtn,
  StyledBoxContainer,
  StyledButton,
} from "./Header.styled";
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { connect,useDispatch } from 'react-redux';

function Header({cart}) {
  // const [cart, setCart] = React.useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElProfile, setAnchorElProfile] = React.useState(null);
  const open = Boolean(anchorElProfile);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
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
    document.getElementById("profile-btn").classList.remove("active");
  };
  const handleClose = () => {
    setAnchorElProfile(null);
    document.getElementById("profile-btn").classList.add("active");
  };
  const onLogout = () => {
    localStorage.clear();
    // if(location.includes())
    navigate('/signin')
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Search>
        <SearchIconWrapper>
          <SearchIcon sx={{ color: "#9D9D9D" }} />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search..." }}
          sx={{ color: "#9D9D9D" }}
        />
      </Search>
      <StyledMenuLink to="/profile">
        <StyledMenuItem>
          <PersonOutlineIcon /> Profile
        </StyledMenuItem>
      </StyledMenuLink>
      <StyledMenuLink to="/my-orders">
        <StyledMenuItem>
          <MarkunreadMailboxIcon />
          My Orders
        </StyledMenuItem>
      </StyledMenuLink>
      <StyledMenuLink to="/wishlist">
        <StyledMenuItem>
          <FavoriteBorderIcon />
          My Wishlist
        </StyledMenuItem>
      </StyledMenuLink>
      <StyledMenuLink to="/cart">
        <StyledMenuItem>
          <ShoppingCartIcon /> Cart
        </StyledMenuItem>
      </StyledMenuLink>
      <StyledLogoutBtn variant="outlined" onClick={onLogout}>
        Logout
      </StyledLogoutBtn>
    </Menu>
  );

  useEffect(() => {
    if(!window.location.href.includes('forgotpassword') && !window.location.href.includes('admin')) {
      getCart();
    }
  }, []);
  
  async function getCart() {
      let response = await getCartItems();
      dispatch({type:'GET_CART_ITEMS',payload:response.data.result})
  }

  return (
    <Box>
      <AppBar position="static">
        <StyledHeaderToolbar>
          <StyledHeaderLogoLink to={window.location.href.includes('admin')? "/admin/products" :"/"}>
            <StyledHeaderLogoTypography variant="h6" noWrap component="div">
              <Education />
              Bookstore
            </StyledHeaderLogoTypography>
          </StyledHeaderLogoLink>
          { !window.location.href.includes('forgotpassword') && (
            <> 
              <Box sx={{ flex: { xs: "0 1 40%", sm: "0 1 4%"}}} />
              <Search sx={{ display: { xs: "none", sm: "flex" } }}>
                <SearchIconWrapper>
                  <SearchIcon sx={{ color: "#9D9D9D" }} />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search..." }}
                  sx={{ color: "#9D9D9D" }}
                />
              </Search>
              <Box sx={{ flex: "0 1 14%" }} />
              <StyledBoxContainer>
                <StyledButton
                  variant="contained"
                  id="profile-btn"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  className="active"
                  sx={{ px: 3 }}
                >
                  <PersonOutlineIcon />
                  Sachin
                </StyledButton>
                <Menu
                  id="profile-btn-menu"
                  anchorEl={anchorElProfile}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                    style: {
                      width: 160,
                      paddingLeft: 10,
                    },
                  }}
                >
                  <Typography variant="body1" color="initial">
                    Hello Poonam,
                  </Typography>
                  <StyledMenuLink to="/profile">
                    <StyledMenuItem>
                      <PersonOutlineIcon
                        fontSize="sm"
                        style={{ marginRight: 10 }}
                      />
                      Profile
                    </StyledMenuItem>
                  </StyledMenuLink>
                  {!window.location.href.includes('admin') && (
                    <>                
                      <StyledMenuLink to="/my-orders">
                        <StyledMenuItem>
                          <MarkunreadMailboxIcon
                            fontSize="sm"
                            style={{ marginRight: 10 }}
                          />
                          My Orders
                        </StyledMenuItem>
                      </StyledMenuLink>
                      <StyledMenuLink to="/wishlist">
                        <StyledMenuItem>
                          <FavoriteBorderIcon
                            fontSize="sm"
                            style={{ marginRight: 10 }}
                          />
                          My Wishlist
                        </StyledMenuItem>
                      </StyledMenuLink>
                    </>
                  )}
                  <StyledMenuLink to={location.pathname.includes('admin')? '/signin' : '/admin-login'}>
                    <StyledMenuItem>
                      {location.pathname.includes('admin')? (
                        <AccountCircleIcon
                        fontSize="sm"
                        style={{ marginRight: 10 }}
                      />
                      ) : (
                        <SupervisorAccountIcon
                          fontSize="sm"
                          style={{ marginRight: 10 }}
                        />
                      ) }
                      {location.pathname.includes('admin') ? 'User' : 'Admin'}
                    </StyledMenuItem>
                  </StyledMenuLink>
                  <StyledLogoutBtn variant="outlined" onClick={onLogout}>
                    Logout
                  </StyledLogoutBtn>
                </Menu>
                { !window.location.href.includes('admin') && (
                  <StyledMenuLink to="/cart">
                    <StyledButton variant="contained" sx={{ px: 4 }}>
                      <Badge badgeContent={cart.length} color="primary">
                        <ShoppingCartIcon />
                      </Badge>
                      Cart
                    </StyledButton>
                  </StyledMenuLink>
                )}
                { window.location.href.includes('admin') && (
                  <StyledMenuLink to="/admin-orders">
                    <StyledButton variant="contained" sx={{ px: 4 }}>
                      <Badge badgeContent={cart.length} color="primary">
                        <ShoppingCartIcon />
                      </Badge>
                      Orders
                    </StyledButton>
                  </StyledMenuLink>
                )}
              </StyledBoxContainer>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
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
            </>
          )}
        </StyledHeaderToolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}

const mapStateToProps = (state) => ({
  cart: state.CartReducer.cart,
});

export default connect(mapStateToProps)(Header);
