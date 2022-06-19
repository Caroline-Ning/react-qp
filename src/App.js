import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogIndex from "./pages/AllBlogs";
import Blog from "./pages/Blog";
import NotFound from "./components/NotFound";
import WebTeam from "./pages/WebTeam";
// json-server --watch src/data/db.json --port 8000
// npm start

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/blogs" element={<BlogIndex />}></Route>
          <Route path="/blogs/:id" element={<Blog />}></Route>
          <Route path="/our-team/web" element={<WebTeam />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
