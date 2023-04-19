import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

// import mac from "../../assets/images/mac.png";

export default function Slide({ data, itemWidth, visibleItems }) {
  /* 
  items: 데이터 배열 
  itemWidth: 한 아이템 너비
  visibleItems: 슬라이드 컨테이너에 보이는 아이템 갯수 
  activeIndex: 현재 보이는 아이템의 index
  slideWidth: 슬라이드 컨테이너 너비 (한 아이템 너비 x 보이는 아이템 갯수)
  slideWrapperWIdth: 전체 트랙 너비 (한 아이템 너비 x 배열에 있는 아이템 갯수)
  sliderOffset: 슬라이드 이동한 거리 (한 아이템 너비 x 현재 index)
  */
  const [activeIndex, setActiveIndex] = useState(0);
  const slideWidth = itemWidth * visibleItems;
  const sliderWrapperWidth = itemWidth * data.length;
  const sliderOffset = itemWidth * activeIndex;

  const handlePrevClick = () => {
    let index = activeIndex - 1;
    // 이전 슬라이드로
    if (index < 0) {
      index = data.length - 1;
      // 첫 슬라이드 이전 슬라이드에 닿으면 -> 마지막 슬라이드로
    }
    setActiveIndex(index);
  };

  const handleNextClick = () => {
    let index = activeIndex + 1;
    // 다음 슬라이드로
    if (index >= data.length) {
      index = 0;
      // 마지막 슬라이드 다음 슬라이드에 닿으면 -> 첫 슬라이드로
    }
    setActiveIndex(index);
  };

  return (
    <StyledSlide
      className="slide"
      style={{ width: `${slideWidth}px`, overflow: "hidden" }}
    >
      {/* 보이는 컨테이너 */}
      <ul
        className="slide-container"
        style={{
          width: `${sliderWrapperWidth}px`,
          transform: `translateX(-${sliderOffset}px)`,
          // itemWidth * activeIndex
        }}
      >
        {/* 전체 트랙 */}
        {data.map((project) => {
          return (
            <li
              className="slide-container-list"
              key={project.key}
              style={{ width: `${itemWidth}px` }}
            >
              {/* 한 아이템 */}
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
        {data.slice(0, visibleItems).map((item) => {
          return (
            <div key={`clone-${item.key}`} style={{ width: `${itemWidth}px` }}>
              {item}
            </div>
          );
        })}
      </ul>
      <div className="slide-btn">
        <button type="button" onClick={handlePrevClick}>
          ◀
        </button>
        <button type="button" onClick={handleNextClick}>
          ▶
        </button>
      </div>
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

      &-list {
        width: calc(100% - 40px);
        margin: 0 auto;
      }
    }
  }
`;

Slide.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  itemWidth: PropTypes.number.isRequired,
  visibleItems: PropTypes.number.isRequired,
  // itemGap: PropTypes.number.isRequired,
  // dataLength: PropTypes.string.isRequired,
};
