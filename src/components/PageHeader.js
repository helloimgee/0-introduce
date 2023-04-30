import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export default function PageHeader({ children, headerBg, className }) {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 600);
    return () => setLoad(false);
  }, []);

  return (
    <StyledPageHeader className={className}>
      <div className="header">
        <h1 className="header-tit">{children}</h1>
        <span className={`header-bg ${load ? "on" : ""}`}>{headerBg}</span>
      </div>
    </StyledPageHeader>
  );
}

const StyledPageHeader = styled.div`
  position: absolute;
  top: 10%;
  width: 100%;
  /* padding: 100px 0 70px; */
  .header {
    position: relative;
    height: 11.2rem;
    /* line-height: 1; */

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
      > span {
        color: var(--main-color);
      }
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
      line-height: 1;
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
  className: PropTypes.string,
};

PageHeader.defaultProps = {
  className: "",
};
