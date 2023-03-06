import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export default function PageHeader({ children, headerBg }) {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 450);
    return () => setLoad(false);
  }, []);

  console.log(typeof children[1]);
  return (
    <StyledPageHeader>
      <div className="header">
        <h1 className="header-tit">{children}</h1>
        <span className={`header-bg ${load ? "on" : ""}`}>{headerBg}</span>
      </div>
    </StyledPageHeader>
  );
}

const StyledPageHeader = styled.div`
  .header {
    position: relative;
    padding: 160px 0px;
    &-tit {
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      transform: translateY(-50%);
      color: #fff;
      font-family: "Archivo Black", sans-serif;
      font-size: 5.6rem;
      font-weight: 900;
      text-transform: uppercase;
      text-align: center;
      letter-spacing: -3px;
      z-index: 100;
    }
    &-bg {
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      transform: translateY(-50%);
      color: #fff;
      font-family: "Archivo Black", sans-serif;
      font-size: 11.2rem;
      opacity: 0.1;
      text-align: center;
      letter-spacing: 60px;
      transition: letter-spacing 1.1s;
      &.on {
        letter-spacing: 0;
      }
    }
  }
`;

PageHeader.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired
  ).isRequired,
  headerBg: PropTypes.string.isRequired,
};
