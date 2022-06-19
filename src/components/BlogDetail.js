import { useParams } from "react-router-dom";
import { Container } from "@mui/system";

import useFetch from "../hooks/useFetch";

const styles = {
  title: {
    color: "#666",
  },
  link: {
    color: "#000",
    textDecoration: "black",
  },
};

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
      {" "}
      <h2 style={styles.title}>All Posts</h2>
      <div className="blog-details">
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        <article>
          <h2>{blog.title}</h2>
          <p>{blog.author}</p>
          <p>{blog.date}</p>
          <div>{blog.body}</div>
          <p>Views {blog.viewsNum}</p>
          <p>Comments {blog.commentsNum}</p>
          <p>Likes {blog.commentsNum}</p>
        </article>
      </div>
    </Container>
  );
};

export default Blog;
