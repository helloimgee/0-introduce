import React, { useState } from "react";
import styled from "styled-components";
import PageHeader from "../../components/PageHeader";
import ProjectBox from "../../components/ProjectBox";
import Menu from "./Menu";
import mac from "../../assets/images/mac.png";

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
      <div className="project">
        <PageHeader headerBg="WORKS">
          MY <span className="point">PROJECTS</span>
        </PageHeader>
        <div className="project-content">
          <Menu
            allProps={allProps}
            personProps={personProps}
            teamProps={teamProps}
          />
          {projectIndex === 0 && (
            <ul className="project-content-person">
              <ProjectBox>
                <p className="projectBox-wrap-title archivo">PORTFOLIO</p>
                <div className="bg" />
                <img src={mac} alt="" />
              </ProjectBox>
              <ProjectBox>
                <p className="projectBox-wrap-title archivo">TOSS</p>
                <div className="bg" />
                <img src={mac} alt="" />
              </ProjectBox>
              <ProjectBox>
                <p className="projectBox-wrap-title archivo">BLIND</p>
                <div className="bg" />
                <img src={mac} alt="" />
              </ProjectBox>
              <ProjectBox>
                <p className="projectBox-wrap-title archivo">BRANDI</p>
                <div className="bg" />
                <img src={mac} alt="" />
              </ProjectBox>
            </ul>
          )}
          {projectIndex === 1 && (
            <ul className="project-content-mobile">
              <ProjectBox>
                <p className="projectBox-wrap-title archivo">PORTFOLIO</p>
                <div className="bg" />
                <img src={mac} alt="" />
              </ProjectBox>
              <ProjectBox>
                <p className="projectBox-wrap-title archivo">TOSS</p>
                <div className="bg" />
                <img src={mac} alt="" />
              </ProjectBox>
            </ul>
          )}
          {projectIndex === 2 && (
            <ul className="project-content-mobile">
              <ProjectBox>
                <p className="projectBox-wrap-title archivo">BLIND</p>
                <div className="bg" />
                <img src={mac} alt="" />
              </ProjectBox>
              <ProjectBox>
                <p className="projectBox-wrap-title archivo">BRANDI</p>
                <div className="bg" />
                <img src={mac} alt="" />
              </ProjectBox>
            </ul>
          )}
          <div className="project-content-foot">
            <div className="project-content-foot-circle on" />
            <div className="project-content-foot-circle" />
            <div className="project-content-foot-circle" />
          </div>
        </div>
      </div>
    </StyledProject>
  );
}

const StyledProject = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #000;
  .project {
    max-width: 1140px;
    margin: 0 auto;

    &-content {
      &-person,
      &-mobile {
        display: flex;
        gap: 30px;
        margin-top: 10px;
      }

      &-foot {
        display: flex;
        justify-content: center;
        gap: 10px;
        margin-top: 50px;
        &-circle {
          width: 13px;
          height: 13px;
          border-radius: 50%;
          background-color: #222;
          &.on {
            background-color: var(--main-color);
          }
        }
      }
    }
  }
`;
