import React from 'react'
import { Box, CardMedia, Stack, Typography } from '@mui/material';
import image1 from '../image1.jpg';
import video from '../sample_video.mp4'
import { messages } from '../utils/constants'
import LinearProgress from '@mui/material/LinearProgress';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDynamic } from '../contexts/DynamicContext';

const Postdetail= () => {
  const { incrementPendingdonationsCount } = useDynamic();
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
    <Stack direction="row">
    <Stack direction="column" justifyContent="flex-center">
      <Typography variant="subtitle1"
        fontweight="bold" color="#3E6D9C">
          Post Details
      </Typography>
      <Typography variant="h5"
        fontweight="bold" color="#3E6D9C">
          { messages[0].title }
      </Typography>
      <Stack direction="row" gap={'10px'} pb='0px'>
        <Box  width="300px" sx={{ marginTop: '50px' }}>
          <Typography variant="subtitle1"
            fontweight="bold" color="#3E6D9C">
              { messages[0].message }
          </Typography>
        </Box>
        <video width="500" height="400" controls style={{ margin: '0px' }}>
          <source src={video} type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
    </Stack>
    <Stack direction="row" gap={'110px'} sx={{ marginTop: '50px' }}>
          <Box
            component="img"
            sx={{
              height: 350,
              width: 350,
              maxHeight: { xs: 233, md: 350 },
              maxWidth: { xs: 350, md: 350 },
            }}
            alt="A man requiring medical care"
            src={image1}
          />
          <Box
            component="img"
            sx={{
              height: 350,
              width: 350,
              maxHeight: { xs: 233, md: 350 },
              maxWidth: { xs: 350, md: 350 },
            }}
            alt="A man requiring medical care"
            src={image1}
          />
        </Stack>
  </Stack>
  <Box sx={{ height: 350, width: 350 }} display="flex" justifyContent="center">
    <Stack gap="30px">
      Raised 20,000 birr out of 100,000birr
      <LinearProgress variant='determinate' value='20' color='success' />
      <TextField id="outlined-basic" label="Amount" variant="outlined" placeholder="Amount"/>
      <Button onClick={ incrementPendingdonationsCount } variant="contained">Add to donations</Button>
      <Button variant="contained">Message</Button>
    </Stack>
  </Box>
  </Stack>
  </Box>
  )
}

export default Postdetail