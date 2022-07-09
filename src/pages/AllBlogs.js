import React from "react";

import useFetch from "../hooks/useFetch";
import BlogListM from "../components/BlogList";
import { Typography } from "@mui/material";

const AllBlogs = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div>
      <Typography variant="blogbg">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        <Typography variant="header">BLOGS</Typography>
        <BlogListM blogs={blogs} />
      </Typography>
    </div>
  );
};
export default AllBlogs;
