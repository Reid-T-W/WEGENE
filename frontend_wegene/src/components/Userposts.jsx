import { Typography, Link, Grid, Button } from '@mui/material'
import { Userdonations, Userpendingdonations, Usereditprofile, StickyHeadTable, Userprofileoptions} from '.'

const Userposts = () => {
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

export default Userposts