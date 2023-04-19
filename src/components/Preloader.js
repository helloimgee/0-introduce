import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components";
// import PropTypes from "prop-types";

export default function Preloader() {
  const [mount, setMount] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMount(true);
    }, 300);
    return () => {
      clearTimeout(timeout);
      setMount(false);
    };
  }, [pathname]);

  return (
    <StyledPreloader className={`preloader ${mount ? "off" : ""}`}>
      <div className="preloader-second" />
      <div className="loader" />
    </StyledPreloader>
  );
}

const preloaderSlide = keyframes`
  from {
    transform: scaleX(0)
  }
  to {
    transform: scaleX(1)
  }
`;

const StyledPreloader = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #111;
  transform-origin: left;
  z-index: 111111;

  .preloader-second {
    height: 100%;
    background-color: #222;
    transform-origin: right;
    animation: ${preloaderSlide} 0.5s ease-in-out 0s 1 normal both;
    // top(0) -> bottom(1)
    // 회색 없는 상태 위->아래로 꽉 채워짐
    // 부모 요소 때문에 사라짐
    display: flex;
    justify-content: center;
    align-items: center;
    > h1 {
      font-size: 30rem;
      font-weight: 900;
      text-align: right;
      color: #fff;
    }
  }

  &.off {
    animation: ${preloaderSlide} 0.5s ease-in-out 0s 1 reverse both;
    // top(1) -> bottom(0)
    // 검은색 꽉 찬 상태 위->아래로 사라짐
  }
  /* .loader {
    position: absolute;
    width: 100%;
    height: 3px;
  } */
`;

// Preloader.propTypes = {
//   route: PropTypes.string.isRequired,
// };
