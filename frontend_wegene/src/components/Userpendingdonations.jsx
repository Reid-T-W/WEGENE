import { Typography, Link, Grid, Button } from '@mui/material'
import { Userdonations, Userposts, Usereditprofile, StickyHeadTableForUserPendingDonations, Userprofileoptions} from '.'
import { useDynamic } from '../contexts/DynamicContext';
import { useEffect } from 'react';

const Userpendingdonations = () => {
  const {
    userPendingDonations
    } = useDynamic();

  // Saving userDonations to session storage
  useEffect(() => {
    sessionStorage.setItem('userPendingDonations', JSON.stringify(userPendingDonations));
  }, [userPendingDonations]);
  return (
    <>
      <Grid mt='50px' align='center'>
        <Userprofileoptions />
      </Grid>
      <Grid mt="30px">
        < StickyHeadTableForUserPendingDonations />
      </Grid>
    </>
  )
}

export default Userpendingdonations