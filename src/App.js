import ExpandingCards from "./50-Projects/ExpandingCards";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expanding-cards" element={<ExpandingCards />} />
      </Routes>
    </div>
  );
}

export default App;
