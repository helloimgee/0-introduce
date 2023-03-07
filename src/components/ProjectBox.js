import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function ProjectBox({ children }) {
  return (
    <StyledProjectBox className="projectBox">
      <Link to="/">{children}</Link>
    </StyledProjectBox>
  );
}

const StyledProjectBox = styled.li`
  position: relative;
  width: calc((100% / 2) - 15px);
  height: calc(100vh / 3);
  border-radius: 50px;
  background-color: #fff;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

ProjectBox.propTypes = {
  children: PropTypes.number.isRequired,
};
