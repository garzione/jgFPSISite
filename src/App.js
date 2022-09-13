import { Routes, Route } from "react-router-dom";
import Principles from "./pages/Principles/Principles";
import Likes from "./pages/Likes/Likes";
import Home from "./pages/Home/Home";
import Learnings from "./pages/Learnings/Learnings";
import Projects from "./pages/Projects/Main";
import Writing from "./pages/Writing/Writing";
import Contact from "./pages/Contact/Contact";
function App() {
  const allElements = (
    <div style={{ backgroundColor: "#808080", height: "100vh" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="principles" element={<Principles />} />
        <Route path="likes" element={<Likes />} />
        <Route path="learnings" element={<Learnings />} />
        <Route path="projects" element={<Projects />} />
        <Route path="writing" element={<Writing />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );

  return allElements;
}

export default App;
