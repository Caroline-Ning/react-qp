import { useParams } from "react-router-dom";
import { Container } from "@mui/system";
import {
  Card,
  CardContent,
  CardActions,
  IconButton,
  Typography,
} from "@mui/material";
import { FavoriteBorderOutlined, ShareOutlined } from "@mui/icons-material";

import useFetch from "../hooks/useFetch";

const Blog = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);

  return (
    <Container
      sx={{
        width: 1000,
        backgroundColor: "#fff",
        paddingTop: 5,
      }}
    >
      <Typography sx={{ marginBottom: 2 }}>All Posts</Typography>
      <Card
        variant="outlined"
        sx={{
          marginBottom: 5,
          paddingLeft: 8,
          paddingRight: 8,
        }}
        square={true}
        key={blog.id}
      >
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        <CardContent>
          <Typography
            sx={{ marginTop: 3, display: "block" }}
            variant="smallGrey"
          >
            {blog.author}
          </Typography>
          <Typography
            sx={{
              marginBottom: 4,
              display: "block",
            }}
            variant="smallGrey"
          >
            {blog.date}
          </Typography>
          <Typography
            variant="h4"
            sx={{
              marginBottom: 6,
            }}
          >
            {blog.title}
          </Typography>

          <Typography
            sx={{
              marginBottom: 6,
              color: "primary.main",
            }}
          >
            {blog.body}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <div style={{ display: "flex" }}>
            <Typography
              sx={{
                marginLeft: 1,
              }}
              variant="smallGrey"
            >
              Views {blog.viewsNum}
            </Typography>
            <Typography
              sx={{
                marginLeft: 1.5,
              }}
              variant="smallGrey"
            >
              Comments {blog.commentsNum}
            </Typography>
          </div>
          <Typography
            sx={{
              marginLeft: 65,
            }}
            variant="smallGrey"
          >
            {blog.likesNum}
          </Typography>
          <IconButton aria-label="add to favorites" sx={{ marginLeft: 0.5 }}>
            <FavoriteBorderOutlined />
          </IconButton>
          <IconButton aria-label="share">
            <ShareOutlined />
          </IconButton>
        </CardActions>
      </Card>
    </Container>
  );
};

export default Blog;
