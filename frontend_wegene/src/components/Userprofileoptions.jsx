import { Typography, Link, Grid, Button } from '@mui/material'
import { Userdonations, Userpendingdonations, Userposts, Usereditprofile} from '.'
import { NavLink } from 'react-router-dom'
import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap"

const Userprofileoptions = () => {
  return (
    <Grid mt='50px' align='center'>
    <Typography>
        <NavLink to='/userdonations'>
            DONATIONS
        </NavLink>
        <NavLink to='/userpendingdonations'> |
            PENDING DONATIONS
        </NavLink>
        <NavLink to='/userposts'> |
            POSTS
        </NavLink>
        <NavLink to='/usereditprofile'> |
            EDIT PROFILE
        </NavLink>
    </Typography>
    </Grid>
  )
}

export default Userprofileoptions