import React from "react";

import useFetch from "../hooks/useFetch";
import WebTeamList from "../components/WebTeamList";
import { Typography } from "@mui/material";

const BlogIndex = () => {
  const {
    data: webs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/webs");

  return (
    <div>
      <Typography variant="blogbg">
        <Typography variant="header">Website Team</Typography>
        <Typography variant="gridbg">
          {error && <div>{error}</div>}
          {isPending && <div>Loading...</div>}
          <WebTeamList webs={webs} />
        </Typography>
      </Typography>
    </div>
  );
};
export default BlogIndex;
