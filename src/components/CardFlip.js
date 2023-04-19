import React from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";
// import data1 from "../assets/data/skillsData";
import Card from "./Card";

export default function CardFlip({ title, data }) {
  return (
    <StyledCardFlip className="cardFlip">
      <div className="cardFlip-wrap">
        <Card className="cardFlip-wrap-front" data={title} />
        <Card className="cardFlip-wrap-back" data={data} />
      </div>
    </StyledCardFlip>
  );
}

const cardBorder = keyframes`
  0% {
    border-top: 1px solid #252525;
    border-right: 1px solid #252525;
    border-bottom: 1px solid #252525;
    border-left: 1px solid #252525;
  }
  25% {
    border-top: 2px solid var(--main-color);
    border-right: 1px solid #252525;
    border-bottom: 1px solid #252525;
    border-left: 1px solid #252525;
  }
  50% {
    border-top: 2px solid var(--main-color);
    border-right: 2px solid var(--main-color);
    border-bottom: 1px solid #252525;
    border-left: 1px solid #252525;
  }
  75% {
    border-top: 2px solid var(--main-color);
    border-right: 2px solid var(--main-color);
    border-bottom: 2px solid var(--main-color);
    border-left: 1px solid #252525;
  }
  100% {
    border-top: 2px solid var(--main-color);
    border-right: 2px solid var(--main-color);
    border-bottom: 2px solid var(--main-color);
    border-left: 2px solid var(--main-color);
  }
`;

const StyledCardFlip = styled.div`
  width: 346.2px;
  height: 500px;

  .cardFlip-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    perspective: 1100px;
    transform-style: preserve-3d;
    transition: 1s;

    &-front,
    &-back {
      position: absolute;
      top: 0;
      left: 0;
      border: 1px solid #252525;
      border-radius: 50px;
    }
    &-back {
      transform: rotateY(180deg);
      width: 100%;
      height: 100%;
      border: 1px solid #252525;
      border-radius: 50px;
    }
  }

  &:hover {
    .cardFlip-wrap {
      transform: rotateY(180deg);

      &-back {
        animation: ${cardBorder} 0.5s ease-out 0.3s 1 normal both;
      }
    }
  }
`;

CardFlip.propTypes = {
  title: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
