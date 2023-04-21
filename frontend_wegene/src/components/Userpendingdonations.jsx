import { Typography, Link, Grid, Button } from '@mui/material'
import { Userdonations, Userposts, Usereditprofile, StickyHeadTable, Userprofileoptions} from '.'

const Userpendingdonations = () => {
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

export default Userpendingdonations