import React from "react";

import useFetch from "../hooks/useFetch";
import BlogListM from "../components/BlogList";
import { CssBaseline } from "@mui/material";

const BlogIndex = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  const styles = {
    custom: {
      margin: 0,
      background: `url(images/bg.jpeg) no-repeat center center fixed`,
      backgroundSize: "cover",
      paddingTop: 250,
    },
  };

  return (
    <div>
      {" "}
      <CssBaseline />
      <div style={styles.custom}>
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        <BlogListM blogs={blogs} title="All Posts" />
      </div>
    </div>
  );
};
export default BlogIndex;
