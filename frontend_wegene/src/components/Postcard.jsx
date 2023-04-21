import { Link, NavLink } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia, Box } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import LinearProgress from '@mui/material/LinearProgress';

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle,
demoChannelUrl, demoChannelTitle } from '../utils/constants';

const Postcard = ({post: {id: {videoId }, snippet}, idx}) => {
  return (
    <Card sx={{ width: { sm:'358px', md: '320px', xs: '100%' },
    boxShadow: 'none', borderRadius: 0}}>
        <Link to={`/posts/${idx}`}>
            <CardMedia 
                image={snippet?.thumbnails?.high?.url}
                alt={snippet?.title}
                sx={{ width: 358, height: 180 }}
            />
            <CardContent sx= {{ backgroundColor: '#ECE8E8',
            height: '106px' }}>
                <Link to='/'>
                <Typography variant="subtitle1"
                fontweight="bold" color="#3E6D9C">
                    {snippet?.title.slice(0, 60) ||
                    demoVideoTitle.slice(0, 60)}
                </Typography>
                </Link>
            </CardContent>
        </Link>
        <Box mb='0px'>
          <LinearProgress variant='determinate' value='60' color='success' />
        </Box>
    </Card>
  )
}

export default Postcard
