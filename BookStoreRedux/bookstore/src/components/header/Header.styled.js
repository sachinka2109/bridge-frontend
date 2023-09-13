import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Box, Button, MenuItem, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '3px',
  backgroundColor: alpha(theme.palette.common.white, 1),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 1),
  },
  width: '100%',
  flex: "0 1 480px",
  [theme.breakpoints.up('xs')]: {
    marginRight: 0,
  },
  [theme.breakpoints.up('sm')]: {
    // marginLeft: theme.spacing(3),
    // width: 'auto',
    marginRight: 10,
  },
  [theme.breakpoints.up('md')]: {
    marginRight: 16
  },
  [theme.breakpoints.up('lg')]: {
    marginRight: 26
  }
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
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


/******************************* Custom styling  ************************************/
export const StyledHeaderToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: !window.location.href.includes('forgotpassword')? 'center' :'flex-start',
  alignItems: 'center',
  backgroundColor: '#A03037',
}))

export const StyledHeaderLogoLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
}))

export const StyledHeaderLogoTypography = styled(Typography)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: 'white'
}))


export const StyledBoxContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    display: 'none',
  },
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  },
}))

export const StyledButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#A03037',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: 'transparent',
    textDecoration: 'none'
  }
}))

export const UserNameTypography = styled(Typography)(({ theme }) => ({
  mx: 2,
  fontSize: 12,
  fontWeight: 'bold'
}))

export const StyledMenuLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: '#878787',
}))

export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  fontSize: 12,
  '&:hover': { color: '#A03037', backgroundColor: 'lightcoral' }
}))


export const StyledLogoutBtn = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  margin: '10px',
  width: 120,
  borderColor: '#A03037',
  color: '#A03037',
  '&:hover': { color: '#A03037', borderColor: '#A03037' }
}))




