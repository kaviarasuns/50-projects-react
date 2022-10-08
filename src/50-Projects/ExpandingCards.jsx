import React, { useState } from "react";
import "./expandingCards.css";

const bgImgs = [
  {
    id: 0,
    bgImg:
      "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    className: "panel active",
    heading: "Explore The World",
    flex: 0.5,
  },
  {
    id: 1,
    bgImg:
      "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    className: "panel",
    heading: "Wild Forest",
    flex: 0.5,
  },
  {
    id: 2,
    bgImg:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
    className: "panel",
    heading: "Sunny Beach",
    flex: 0.5,
  },
  {
    id: 3,
    bgImg:
      "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
    className: "panel",
    heading: "City on Winter",
    flex: 0.5,
  },
  {
    id: 4,
    bgImg:
      "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    className: "panel",
    heading: "Mountains - Clouds",
    flex: 0.5,
  },
];

const ExpandingCards = () => {
  return (
    <div className="container">
      {bgImgs.map((bgImgs, index) => (
        <Cards bgImgs={bgImgs} key={bgImgs.id} index={index} />
      ))}
    </div>
  );
};

const Cards = ({ bgImgs, index }) => {
  const [flex, setFlex] = useState(0.5);
  const handleClick = () => {
    if (bgImgs.id === index) {
      setFlex(5);
    } else {
      setFlex(0.5);
    }
  };

  return (
    <>
      <div
        className="panel"
        style={{
          backgroundImage: `url(${bgImgs.bgImg})`,
          flex: flex,
        }}
        onClick={handleClick}
      >
        <h3>{bgImgs.heading}</h3>
      </div>
    </>
  );
};

export default ExpandingCards;

// const panels = document.querySelectorAll(".panel");

// console.log(panels[0]);

// panels.forEach((panel) => {
//   panel.addEventListener("click", () => {
//     removeActiveClasses();
//     panel.classList.add("active");
//   });
// });

// function removeActiveClasses() {
//   panels.forEach((panel) => {
//     panel.classList.remove("active");
//   });
// }

// const panels = document.querySelectorAll(".panel");

// // console.log(panels[0]);

// panels.forEach((panel) => {
//   panel.addEventListener("click", () => {
//     removeActiveClasses();
//     panel.classList.add("active");
//   });
// });

// function removeActiveClasses() {
//   panels.forEach((panel) => {
//     panel.classList.remove("active");
//   });
// }
