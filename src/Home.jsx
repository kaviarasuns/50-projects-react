import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const fiftyProjects = [{ id: 1, name: "Expanding Cards" }];
  return (
    <div>
      <Link to="/expanding-cards">{fiftyProjects[0].name}</Link>
    </div>
  );
};

export default Home;
