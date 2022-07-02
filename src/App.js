import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllBlogs from "./pages/AllBlogs";
import Blog from "./pages/Blog";
import NotFound from "./components/NotFound";
import WebTeam from "./pages/WebTeam";
import Person from "./pages/Person";
import Main from "./pages/Main";
// json-server --watch src/data/db.json --port 8000
// npm start

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/blogs" element={<AllBlogs />}></Route>
          <Route path="/blogs/:id" element={<Blog />}></Route>
          <Route path="/our-team/web" element={<WebTeam />}></Route>
          <Route path="/our-team/web/:id" element={<Person />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
