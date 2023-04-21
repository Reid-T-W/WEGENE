import { Stack, Box } from "@mui/material";
import { Postcard } from "./";
import { useNavigate } from 'react-router-dom';

const Posts = ({ posts }) => {
  const navigate = useNavigate();
  const handleClick = () => navigate('/posts/1');

  return (
    <Stack direction="row" flexWrap="wrap"
    justifyContent="center" gap={2}>
      {posts.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <Postcard post={item} idx={idx}/>}
        </Box>
      ))}

    </Stack>
  )
}

export default Posts