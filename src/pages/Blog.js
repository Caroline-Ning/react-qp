import React from "react";

import BlogDetail from "../components/BlogDetail";
import Comments from "../components/Comments";
import { CssBaseline } from "@mui/material";

const Blog = () => {
  const styles = {
    body: {
      background: `url(/images/bg.jpeg) no-repeat center center fixed`,
      backgroundSize: "cover",
    },
  };

  return (
    <div>
      <div style={styles.body}>
        <BlogDetail />
        <Comments />
      </div>
    </div>
  );
};

export default Blog;
