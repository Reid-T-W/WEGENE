import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDynamic } from '../contexts/DynamicContext';
import { getToLogoutAPI } from '../utils/getToLogoutAPI'
import { toast } from 'react-toastify';

const Navbar = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(true);
  const { isLoggedIn,
          setIsLoggedIn,
          pendingdonationsCount, 
          notificationsCount, 
          unreadCount, 
          resetUnreadCount, 
          resetNotificationsCount, 
          resetPendingdonationsCount,
          sessionToken,
          setSessionToken,
          setUsername
        } = useDynamic();
  
  // Retrieving from session storage
  useEffect(() => {
    const loggedInStatus = JSON.parse(sessionStorage.getItem('isLoggedIn'));
    setIsLoggedIn(loggedInStatus);
  }, []);
  
  // Save session token to session storage
  useEffect(() => {
      sessionStorage.setItem('sessionToken', sessionToken);
    }, [sessionToken]);
  
  // Saving logged in status to session storage
  useEffect(() => {
    sessionStorage.setItem('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);

  const renderLoggedInCompnents = () => {
    if (isLoggedIn) {
      return (
        <>
            <Button color="inherit">Logout</Button>
            <p id="chats-count">{ unreadCount }</p>
            <p id="notifications-count">{ notificationsCount }</p>
            <p id="pending-donations-count">{ pendingdonationsCount }</p>
        </>
      )
    }
      else {
        return <Button color="inherit">Login</Button>
      }
  }
  // let loginButton;
  // if (isLoggedIn) {
  //   loginButton = 'Logout';
  // } else {
  //   loginButton = 'Login'
  // }
  const navigate = useNavigate();
  const navigateToLogin = () => {
      navigate("/login")
  }
  // const {

  //   } = useDynamic();

  const logoutUser = async() => {
    const url = 'http://localhost:5000/api/v1/logout';
    const headers = {"session_id": sessionToken};
    return (await getToLogoutAPI(url, headers)
    .then((response) => { 
        // Get the session token from the response
        setIsLoggedIn(false)
        // Save the session_id to a state
        setSessionToken('');
        toast(response.data)
        // Setting profile details
        setUsername('');
        // Redirect to login page
        navigateToLogin();
        
    })
    .catch((error) => { alert(error) }))
}

const dynamicNavLink = () => {
  if (isLoggedIn) {
    return (
      <>
        <Button onClick={ logoutUser } color="inherit">
        <NavLink>Logout</NavLink>
        </Button>
      </>
    )} else {
    return (
      <>
        <Button onClick={ navigateToLogin } color="inherit">
          <NavLink>Login</NavLink>
        </Button>
      </>
    )}
    
  // if (isLoggedIn) {
  //   dynamicNavLink = "<NavLink to={ '/logout' }>";
  // } else {
  //   dynamicNavLink = "<NavLink to={ '/login' }>"
  // }
}

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='sticky'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <span class="logo" >WE</span>
            <span id="logo_color" class="logo">GENE</span>
          </Typography>
          <Button color="inherit" onClick={ resetUnreadCount }><ChatIcon /></Button>
          
          <Button onClick={ resetNotificationsCount }color="inherit">
            <NotificationsIcon />
          </Button>
          
          <Button onClick={resetPendingdonationsCount} color="inherit">
            <NavLink to='/userpendingdonations'> Pending Donations </NavLink>
          </Button>
          
          <Button color="inherit">
            <NavLink to='/'> Posts </NavLink>
          </Button>
          <Button color="inherit">
            <NavLink to='/userdonations'> Profile </NavLink>
          </Button>
          {/* {renderLoggedInCompnents() } */}
            { dynamicNavLink() }
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar
