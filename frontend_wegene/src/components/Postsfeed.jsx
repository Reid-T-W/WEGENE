import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Posts } from './';

const Postsfeed = () => {
    const [posts, setPosts] = useState([]);
    // Lifecycle hook
    useEffect(() => {
      fetchFromAPI(`search?part=snippet&q=New`)
      .then((data) => setPosts(data.items))
    }, []);

  return (
    <>
        <Box p={2} sx={{ overflow: 'auto', height: '90vh',
        flex: 2}}>
            <Posts posts={posts}/>
        </Box>
    </>
  )
}

export default Postsfeed
