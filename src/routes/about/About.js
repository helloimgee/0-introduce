import React from "react";
import styled from "styled-components";
// import Card from "../../components/Card";
import PageHeader from "../../components/PageHeader";

import data1 from "../../assets/data/skillsData";
import data2 from "../../assets/data/skillsData2";
import data3 from "../../assets/data/skillsData3";
import front from "../../assets/data/skillsData4";
import react from "../../assets/data/skillsData5";
import etc from "../../assets/data/skillsData6";
import CardFlip from "../../components/CardFlip";

export default function About() {
  return (
    <StyledAbout>
      <div className="about">
        <PageHeader headerBg="SKILLS">
          ABOUT <span className="point">ME</span>
        </PageHeader>

        <div className="about-flex">
          <CardFlip data={data1} title={front} />
          <CardFlip data={data2} title={react} />
          <CardFlip data={data3} title={etc} />
          {/* <Card data={data2} />
          <Card data={data3} /> */}
        </div>
      </div>
    </StyledAbout>
  );
}

const StyledAbout = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #000;

  .about {
    margin: 0 auto;
    max-width: 1140px;
    padding: 0 20px;

    &-flex {
      display: flex;
      gap: 30px;
    }
  }
`;
