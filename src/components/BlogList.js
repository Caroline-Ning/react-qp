import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Link,
} from "@mui/material";
import { FavoriteBorderOutlined, ShareOutlined } from "@mui/icons-material";
import { Container } from "@mui/system";

const BlogList = ({ blogs }) => {
  return (
    <Container
      sx={{
        width: 1000,
        backgroundColor: "#fff",
        paddingTop: 5,
      }}
    >
      <Typography sx={{ marginBottom: 4 }}>All Blogs</Typography>
      {blogs.map((blog) => (
        <Card
          variant="outlined"
          square={true}
          sx={{
            marginBottom: 5,
          }}
          key={blog.id}
        >
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {blog.author}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              sx={{
                marginBottom: 2,
              }}
            >
              {blog.date}
            </Typography>
            <Link
              href={`/blogs/${blog.id}`}
              sx={{
                color: "#000",
                textDecoration: "none",
                ":hover": {
                  color: "primary.main",
                },
              }}
            >
              <Typography
                variant="h5"
                fontWeight="900"
                sx={{
                  marginBottom: 2,
                }}
              >
                {blog.title}
              </Typography>
            </Link>
          </CardContent>
          <CardActions disableSpacing>
            <div style={{ display: "flex" }}>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                sx={{
                  marginLeft: 1,
                }}
              >
                Views {blog.viewsNum}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                sx={{
                  marginLeft: 1,
                }}
              >
                Comments {blog.commentsNum}
              </Typography>
            </div>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              sx={{
                marginLeft: 85,
              }}
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
      ))}
    </Container>
  );
};

export default BlogList;
