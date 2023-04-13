import { Stack, Box } from "@mui/material";
import { Postcard } from "./";

const Posts = ({ posts }) => {
  return (
    <Stack direction="row" flexWrap="wrap"
    justifyContent="center" gap={2}>
      {posts.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <Postcard post={item} />}
        </Box>
      ))}

    </Stack>
  )
}

export default Posts