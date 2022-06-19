import React from "react";

import useFetch from "../hooks/useFetch";
import WebTeamList from "../components/WebTeamList";

const BlogIndex = () => {
  const {
    data: webs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/webs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      <WebTeamList webs={webs} title="Website Team" />
    </div>
  );
};
export default BlogIndex;
