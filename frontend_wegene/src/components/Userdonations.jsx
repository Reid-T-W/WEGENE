import { Typography, Link, Grid } from '@mui/material'
import { Userpendingdonations, Userposts, Usereditprofile, StickyHeadTable, Userprofileoptions } from '.'
import { NavLink } from 'react-router-dom'
import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap"

const Userdonations = () => {
  return (
    <>
      <Grid mt='50px' align='center'>
      <Userprofileoptions />
      </Grid>
      <Grid mt="30px">
        <StickyHeadTable />
      </Grid>
    </>
  )
}

export default Userdonations
