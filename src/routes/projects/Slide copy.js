// /* eslint-disable no-plusplus */
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import PropTypes from "prop-types";

// // import mac from "../../assets/images/mac.png";

// export default function Slide({ data, dataLength }) {
//   // const slideWidth = 570;
//   // const slideGap = 15;
//   // const [currentIndex, setCurrentIndex] = useState(0);
//   // const slidesLength = parseInt(dataLength, 10);

//   const slides = ["#33a", "#8c9", "#f3e074"];
//   const items = ["#33a", "#8c9", "#f3e074"];
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const addItemNum = 2; // 양끝에 추가될 데이터수

//   const handleSlide = (index) => {
//     if (index < 0) {
//       index = itemSize - 1; // 처음에 도달하면 마지막으로 돌아가기
//     } else if (index > itemSize) {
//       index = 0; // 마지막에 도달하면 처음으로 돌아가기
//     }
//     setCurrentIndex(index);
//   };

//   const setSlide = () => {
//     const addedFront = [];
//     const addedLast = [];
//     let index = 0;
//     while (index < addItemNum) {
//       addedLast.push(items[index % items.length]);
//       // 0 % 3 -> items[0] / 1 % 3 -> items[1] / 2 % 3 -> items[2] / 3 % 3 -> items[0]
//       addedFront.unshift(items[items.length - 1 - (index % items.length)]);
//       // 3 - 1 - 0 -> items[2] / 3 - 1 - 1 -> items[1] / 3 - 1 - 2 -> items[0] / 3 - 1 - 0 -> items[2]
//       index++;
//     }
//     return [...addedFront, ...items, ...addedLast];
//   };

//   const getItemIndex = (index) => {
//     let newIndex = index;
//     newIndex -= addItemNum;
//     if (newIndex < 0) {
//       newIndex += itemSize;
//     } else if (newIndex >= itemSize) {
//       newIndex -= itemSize;
//     }
//   };

//   const replaceSlide = (index) => {
//     setTimeout(() => {
//       setTransition("");
//       setCurrentIndex(index);
//     }, transitionTime);
//   };

//   const handleSwipe = (direction) => {
//     setCurrentIndex((currentIndex) => currentIndex + direction);
//   };

//   return (
//     <StyledSlide className="slide">
//       <ul
//         className="slide-track"
//         style={{
//           transform: `translateX(-${
//             (100 / slides.length) * 0.5 + (100 / slides.length) * currentIndex
//           }%)`,
//         }}
//       >
//         {data.map((project, slideIndex) => {
//           const itemIndex = getItemIndex(slideIndex);
//           return (
//             <li
//               className={`slide-track-item ${
//                 currentIndex === slideIndex ? "current-slide" : ""
//               }`}
//               key={project.key}
//             >
//               <Link
//                 to={`/projects/${project.title}`}
//                 className="slide-track-item-link"
//               >
//                 <p className="slide-track-item-link-tit archivo">
//                   {project.title}
//                 </p>
//                 <div className="slide-track-item-link-bg" />
//                 <img
//                   className="slide-track-item-link-img"
//                   src={project.img}
//                   alt=""
//                 />
//               </Link>
//             </li>
//           );
//         })}
//       </ul>
//       <div className="slide-btn">
//         <button type="button" onClick={() => handleSwipe(-1)}>
//           ◀
//         </button>
//         <button type="button" onClick={() => handleSwipe(+1)}>
//           ▶
//         </button>
//       </div>
//       <div className="slide-foot">
//         <div
//           className={`slide-foot-circle ${currentIndex === 0 ? "on" : ""}`}
//           role="button"
//           onClick={firstSlide}
//           onKeyDown={firstSlide}
//           tabIndex="0"
//           aria-label="firstSlide"
//         />
//         <div
//           className={`slide-foot-circle ${currentIndex === 1 ? "on" : ""}`}
//           role="button"
//           onClick={secondSlide}
//           onKeyDown={secondSlide}
//           tabIndex="0"
//           aria-label="secondSlide"
//         />
//         <div
//           className={`slide-foot-circle ${currentIndex === 2 ? "on" : ""}`}
//           role="button"
//           onClick={thirdSlide}
//           onKeyDown={thirdSlide}
//           tabIndex="0"
//           aria-label="thirdSlide"
//         />
//       </div>
//     </StyledSlide>
//   );
// }

// const StyledSlide = styled.div`
//   position: relative;
//   max-width: 1140px;
//   margin: 0 auto;
//   overflow: hidden;

//   .slide-track {
//     position: relative;
//     width: 100%;
//     display: flex;
//     gap: 30px;
//     transition: all 0.4s ease;

//     &-item {
//       flex-shrink: 0;
//       position: relative;
//       width: 555px;
//       height: 327.45px;
//       border-radius: 50px;
//       /* background-color: #fff; */

//       &-link {
//         position: relative;
//         display: inline-block;
//         width: 100%;
//         height: 100%;

//         > p {
//           display: none;
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           transform: translate(-50%, -50%);
//           font-size: 3rem;
//           font-weight: 900;
//           color: #fff;
//           z-index: 30;
//           transition: all 0.4s ease;
//         }
//         > div {
//           display: none;
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background-color: rgb(0, 0, 0, 0.5);
//           transition: all 0.4s ease;
//           z-index: 20;
//         }
//         > img {
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           transform: translate(-50%, -50%);
//           width: 100%;
//           height: 100%;
//           object-fit: contain;
//           transition: all 0.4s ease;
//           z-index: 10;
//         }

//         &:hover {
//           > p {
//             display: block;
//           }
//           > div {
//             display: block;
//           }
//           > img {
//             width: 90%;
//             height: 90%;
//           }
//         }
//       }
//     }
//   }

//   .slide-btn {
//     position: absolute;
//     top: 40%;
//     width: 100%;
//     height: 1.2rem;
//     > button {
//       font-size: 1.2rem;
//       color: var(--main-color);
//     }
//     > button:nth-of-type(1) {
//       position: absolute;
//       left: 0;
//     }
//     > button:nth-of-type(2) {
//       position: absolute;
//       right: 0;
//     }
//   }

//   /* .projectBox-sub {
//     display: none;
//     position: absolute;
//     top: 57%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     font-size: 1.5rem;
//     font-weight: 700;
//     color: var(--main-color);
//     z-index: 30;
//   } */
//   .slide-foot {
//     display: flex;
//     justify-content: center;
//     gap: 10px;
//     margin-top: 50px;
//     &-circle {
//       width: 13px;
//       height: 13px;
//       border-radius: 50%;
//       background-color: #222;
//       cursor: pointer;
//       &.on {
//         background-color: var(--main-color);
//       }
//     }
//   }
//   @media screen and (max-width: 1424px) {
//     .slide-track {
//       flex-wrap: wrap;

//       &-item {
//         width: calc(100% - 40px);
//         margin: 0 auto;
//       }
//     }
//   }
// `;

// Slide.propTypes = {
//   data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
//   dataLength: PropTypes.string.isRequired,
// };
