import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  IconButton,
  Typography,
} from "@mui/material";
import { FavoriteBorderOutlined, ShareOutlined } from "@mui/icons-material";
import { Container } from "@mui/system";

import { Link } from "react-router-dom";
const styles = {
  title: {
    color: "#666",
  },
  link: {
    color: "#000",
    textDecoration: "black",
  },
};
const BlogList = ({ blogs, title }) => {
  return (
    <Container
      sx={{
        width: 1000,
        backgroundColor: "#fff",
        paddingTop: 5,
      }}
    >
      <h2 style={styles.title}>{title}</h2>
      {blogs.map((blog) => (
        <Card
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
            <Link to={`/blogs/${blog.id}`} style={styles.link}>
              <Typography
                variant="h6"
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
                  marginLeft: 1.5,
                }}
              >
                Comments {blog.commentsNum}
              </Typography>
            </div>
            <IconButton
              aria-label="add to favorites"
              sx={{
                marginLeft: 85,
              }}
            >
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
