import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function ProjectBox({ children }) {
  return (
    <StyledProjectBox className="projectBox">
      <Link to="/" className="projectBox-wrap">
        {children}
      </Link>
    </StyledProjectBox>
  );
}

const StyledProjectBox = styled.li`
  position: relative;
  width: calc((100% / 2) - 15px);
  height: calc(100vh / 3);
  border-radius: 50px;
  background-color: #fff;
  .projectBox-wrap {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 100%;

    &-title {
      display: none;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 3rem;
      font-weight: 900;
      color: #fff;
      z-index: 30;
      transition: all 0.4s ease;
    }
    .bg {
      display:
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgb(0, 0, 0, 0.5);
      transition: all 0.4s ease;
      z-index: 20;
    }
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      object-fit: contain;
      transition: all 0.4s ease;
      z-index: 10;
    }
  }
  /* .projectBox-sub {
    display: none;
    position: absolute;
    top: 57%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--main-color);
    z-index: 30;
  } */

  &:hover {
    .projectBox-wrap {
      &-title {
        display: block;
      }
      .bg {
        display: block;
      }
      > img {
        width: 90%;
        height: 90%;
      }
    }
  }
`;

ProjectBox.propTypes = {
  children: PropTypes.number.isRequired,
  // title: PropTypes.string.isRequired,
};
