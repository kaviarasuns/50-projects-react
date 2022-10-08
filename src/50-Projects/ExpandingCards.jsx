import React, { useState } from "react";
import "./expandingCards.css";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 70vw;
  @media (max-width: 480px) {
    width: 100vw;
  }
`;

const Panel = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 80vh;
  border-radius: 50px;
  color: #fff;
  cursor: pointer;
  flex: 0.5;
  margin: 10px;
  position: relative;
  transition: flex 0.7s ease-in;
  @media (max-width: 480px) {
    :nth-of-type(4),
    :nth-of-type(5) {
      display: none;
    }
  }
`;

const PanelHeading = styled.h3`
  font-size: 24px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  margin: 0;
  opacity: 0;
`;

const ExpandingCards = () => {
  const backgroundImgs = [
    {
      id: 0,
      bgImg:
        "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      className: "panel active",
      heading: "Explore The World",
      flex: 5,
      opacity: 1,
      transition: "opacity 0.3s ease-in 0.4s",
    },
    {
      id: 1,
      bgImg:
        "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      className: "panel",
      heading: "Wild Forest",
      flex: 0.5,
      opacity: 0,
      transition: "flex 0.7s ease-in",
    },
    {
      id: 2,
      bgImg:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
      className: "panel",
      heading: "Sunny Beach",
      flex: 0.5,
      opacity: 0,
      transition: "flex 0.7s ease-in",
    },
    {
      id: 3,
      bgImg:
        "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
      className: "panel",
      heading: "City on Winter",
      flex: 0.5,
      opacity: 0,
      transition: "flex 0.7s ease-in",
    },
    {
      id: 4,
      bgImg:
        "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      className: "panel",
      heading: "Mountains - Clouds",
      flex: 0.5,
      opacity: 0,
      transition: "flex 0.7s ease-in",
    },
  ];

  const [bgImgs, setBgImgs] = useState(backgroundImgs);

  const handleClick = (ele) => {
    var bg = ele.target.innerText;

    const newbgImgs = [];

    for (let i = 0; i < bgImgs.length; i++) {
      if (bgImgs[i].heading === bg) {
        newbgImgs.push({
          ...bgImgs[i],
          flex: 5,
          opacity: 1,
          transition: "opacity 0.3s ease-in 0.4s",
        });
      } else {
        newbgImgs.push({
          ...bgImgs[i],
          flex: 0.5,
          opacity: 0,
          transition: "flex 0.7s ease-in",
        });
      }
    }

    setBgImgs(newbgImgs);
    console.log(newbgImgs);
  };

  return (
    <Container>
      {bgImgs.map((bgImgs) => (
        <Panel
          key={bgImgs.id}
          style={{
            backgroundImage: `url(${bgImgs.bgImg})`,
            flex: bgImgs.flex,
          }}
          onClick={handleClick}
        >
          <PanelHeading
            style={{ opacity: bgImgs.opacity, transition: bgImgs.transition }}
          >
            {bgImgs.heading}
          </PanelHeading>
        </Panel>
      ))}
    </Container>
  );
};

export default ExpandingCards;
