import React from "react";
import styled from "styled-components";
import data1 from "../assets/data/skillsData";
import data4 from "../assets/data/skillsData4";
import Card from "./Card";

export default function CardFlip() {
  return (
    <StyledCardFlip>
      <div className="cardFlip">
        <Card className="cardFlip-front" data={data4} />
        <Card className="cardFlip-back" data={data1} />
      </div>
    </StyledCardFlip>
  );
}

const StyledCardFlip = styled.div`
  width: calc(33% - 30px);
  height: 500px;
  perspective: 1100px;

  .cardFlip {
    width: 100%;
    height: 100%;
    position: relative;
    transition: 0.4s;
    transform-style: preserve-3d;

    &-back {
      transform: rotateY(180deg);
    }
  }
  &:hover {
    // 호버 시 뒤집기
    transform: rotateY(180deg);
  }
`;
