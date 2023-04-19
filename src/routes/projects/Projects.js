import React, { useState } from "react";
import styled from "styled-components";

import Slide from "./Slide";
import Menu from "./Menu";
import PageHeader from "../../components/PageHeader";

import data1 from "../../assets/data/projectListAll";
import data2 from "../../assets/data/projectListPerson";
import data3 from "../../assets/data/projectListTeam";
import Preloader from "../../components/Preloader";

export default function Project() {
  const [projectIndex, setProjectIndex] = useState(0);

  const allProps = () => {
    setProjectIndex(0);
  };
  const personProps = () => {
    setProjectIndex(1);
  };
  const teamProps = () => {
    setProjectIndex(2);
  };
  return (
    <StyledProject>
      <Preloader />
      <PageHeader headerBg="WORKS" className="pageHeader">
        MY <span className="point">PROJECTS</span>
      </PageHeader>
      <div className="project">
        <div className="project-content">
          <Menu
            allProps={allProps}
            personProps={personProps}
            teamProps={teamProps}
          />
          {projectIndex === 0 && <Slide data={data1} dataLength="4" />}
          {projectIndex === 1 && <Slide data={data2} dataLength="2" />}
          {projectIndex === 2 && <Slide data={data3} dataLength="2" />}
        </div>
      </div>
    </StyledProject>
  );
}

const StyledProject = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #000;

  .project {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0 auto;

    &-content {
      width: 100%;
      position: relative;
    }
  }

  @media screen and (max-width: 1424px) {
    .pageHeader {
      top: 80px;
    }
    .project {
      padding-top: 250px;
      padding-bottom: 80px;
      align-items: flex-start;
    }
  }
`;
