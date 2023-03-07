import React from "react";
import styled from "styled-components";
import PageHeader from "../../components/PageHeader";
import ProjectBox from "../../components/ProjectBox";
import Menu from "./Menu";
import mac from "../../assets/images/mac.png";

export default function Project() {
  return (
    <StyledProject>
      <div className="project">
        <PageHeader headerBg="WORKS">
          MY <span className="point">PROJECTS</span>
        </PageHeader>
        <div className="project-content">
          <Menu />
          <ul className="project-content-wrap">
            <ProjectBox>
              <img src={mac} alt="" />
            </ProjectBox>
            <ProjectBox>
              <img src={mac} alt="" />
            </ProjectBox>
          </ul>
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
      &-wrap {
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
          width: 20px;
          height: 20px;
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
