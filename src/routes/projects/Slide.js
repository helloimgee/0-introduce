import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

// import mac from "../../assets/images/mac.png";

export default function Slide({ data, dataLength }) {
  const slideWidth = 570;
  const slideGap = 15;
  const [slideIndex, setSlideIndex] = useState(0);
  const slidesLength = parseInt(dataLength, 10);

  // useEffect(() => {
  //   setInterval(() => {
  //     setSlideIndex((prev) => prev - 1);
  //   }, 3000);
  //   return () => clearInterval();
  // }, []);
  const firstSlide = () => {
    setSlideIndex(0);
  };
  const secondSlide = () => {
    if (slidesLength <= 2) {
      return;
    }
    setSlideIndex(-1);
  };
  const thirdSlide = () => {
    if (slidesLength <= 3) {
      return;
    }
    setSlideIndex(-2);
  };

  const toPrev = () => {
    if (slideIndex > 0) {
      setSlideIndex((prev) => prev - 1);
    }
  };
  const toNext = () => {
    if (slideIndex < slidesLength - 2) {
      setSlideIndex((prev) => prev + 1);
    }
  };
  return (
    <StyledSlide className="slide">
      <ul
        className="slide-container"
        style={{
          transform: `translateX(-${(slideWidth + slideGap) * slideIndex}px)`,
        }}
      >
        {data.map((project) => {
          return (
            <li className="slide-container-list" key={project.key}>
              <Link
                to={`/projects/${project.title}`}
                className="slide-container-list-link"
              >
                <p className="slide-container-list-link-tit archivo">
                  {project.title}
                </p>
                <div className="slide-container-list-link-bg" />
                <img
                  className="slide-container-list-link-img"
                  src={project.img}
                  alt=""
                />
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="slide-btn">
        <button
          type="button"
          onClick={toPrev}
          style={{ display: slideIndex <= 0 ? "none" : "" }}
        >
          ◀
        </button>
        <button
          type="button"
          onClick={toNext}
          style={{ display: slideIndex >= slidesLength - 2 ? "none" : "" }}
        >
          ▶
        </button>
      </div>
      {data.length > 2 ? (
        <div className="slide-foot">
          <div
            className={`slide-foot-circle ${slideIndex === 0 ? "on" : ""}`}
            role="button"
            onClick={firstSlide}
            onKeyDown={firstSlide}
            tabIndex="0"
            aria-label="firstSlide"
          />
          <div
            className={`slide-foot-circle ${slideIndex === 1 ? "on" : ""}`}
            role="button"
            onClick={secondSlide}
            onKeyDown={secondSlide}
            tabIndex="0"
            aria-label="secondSlide"
          />
          <div
            className={`slide-foot-circle ${slideIndex === 2 ? "on" : ""}`}
            role="button"
            onClick={thirdSlide}
            onKeyDown={thirdSlide}
            tabIndex="0"
            aria-label="thirdSlide"
          />
        </div>
      ) : (
        ""
      )}
    </StyledSlide>
  );
}

const StyledSlide = styled.div`
  position: relative;
  max-width: 1140px;
  margin: 0 auto;
  overflow: hidden;

  .slide-container {
    position: relative;
    width: 100%;
    display: flex;
    gap: 30px;
    transition: all 0.4s ease;

    &-list {
      flex-shrink: 0;
      position: relative;
      width: 555px;
      height: 327.45px;
      border-radius: 50px;
      /* background-color: #fff; */

      &-link {
        position: relative;
        display: inline-block;
        width: 100%;
        height: 100%;

        > p {
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
        > div {
          display: none;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgb(0, 0, 0, 0.5);
          transition: all 0.4s ease;
          z-index: 20;
        }
        > img {
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

        &:hover {
          > p {
            display: block;
          }
          > div {
            display: block;
          }
          > img {
            width: 90%;
            height: 90%;
          }
        }
      }
    }
  }

  .slide-btn {
    position: absolute;
    top: 40%;
    width: 100%;
    height: 1.2rem;
    > button {
      font-size: 1.2rem;
      color: var(--main-color);
    }
    > button:nth-of-type(1) {
      position: absolute;
      left: 0;
    }
    > button:nth-of-type(2) {
      position: absolute;
      right: 0;
    }
  }

  .slide-foot {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 50px;
    &-circle {
      width: 13px;
      height: 13px;
      border-radius: 50%;
      background-color: #222;
      cursor: pointer;
      &.on {
        background-color: var(--main-color);
      }
    }
  }

  @media screen and (max-width: 1424px) {
    .slide-container {
      flex-wrap: wrap;
      padding-bottom: 50px;

      &-list {
        width: calc(100% - 40px);
        margin: 0 auto;
      }
    }

    .slide-btn {
      display: none;
    }

    .slide-foot {
      display: none;
    }
  }
`;

Slide.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  dataLength: PropTypes.string.isRequired,
};
