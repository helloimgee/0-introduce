import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
// import data1 from "../assets/data/skillsData";
import Card from "./Card";

export default function CardFlip({ title, data }) {
  return (
    <StyledCardFlip>
      <div className="cardFlip">
        <Card className="cardFlip-front" data={title} />
        <Card className="cardFlip-back" data={data} />
      </div>
    </StyledCardFlip>
  );
}

const StyledCardFlip = styled.div`
  width: calc(33% - 30px);
  height: 500px;

  .cardFlip {
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
    }
    &-back {
      transform: rotateY(180deg);
    }
  }

  &:hover .cardFlip {
    // 호버 시 뒤집기
    transform: rotateY(180deg);
  }
`;

CardFlip.propTypes = {
  title: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
