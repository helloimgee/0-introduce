import React, { useState } from "react";
import styled from "styled-components";
// import Card from "../../components/Card";

import PageHeader from "../../components/PageHeader";
import data1 from "../../assets/data/skillsData";
import data2 from "../../assets/data/skillsData2";
import data3 from "../../assets/data/skillsData3";
import front from "../../assets/data/skillsData4";
import style from "../../assets/data/skillsData5";
import etc from "../../assets/data/skillsData6";
import CardFlip from "../../components/CardFlip";
import Preloader from "../../components/Preloader";
// import logoMain from "../../assets/images/logoMain.png";
// import profile from "../../assets/images/profile.jpeg";

export default function About() {
  const [isHover, setIsHover] = useState(false);

  const handleHoverOn = () => {
    setIsHover(true);
  };
  const handleHoverOff = () => {
    setIsHover(false);
  };

  return (
    <StyledAbout>
      <Preloader />
      <PageHeader headerBg="SKILLS" className="pageHeader">
        ABOUT <span className="point">ME</span>
      </PageHeader>
      <div className="about">
        <div className="about-profileFlex">
          <div
            className="about-profile"
            onMouseOver={handleHoverOn}
            onMouseLeave={handleHoverOff}
            onFocus={handleHoverOn}
          >
            <div className="about-profile-wrap">
              <video
                className="about-profile-wrap-front"
                src={`${process.env.PUBLIC_URL}/videos/profileFront.mp4`}
                autoPlay
                loop
                muted
                playsInline
              />
              <video
                className="about-profile-wrap-back"
                src={`${process.env.PUBLIC_URL}/videos/profileBack2.mp4`}
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>
          <div className="about-introduce">
            {isHover ? (
              <p className="about-introduce-txt after">
                <b className="bold point pc">
                  배려하고, 성장하고, 소통하고, 생각하는 개발자
                </b>
                <b className="bold point mobile">
                  배려하고, 성장하고, 소통하고, 생각하는 개발자
                </b>
                <br />
                원하는 아이디어나 기능을 성공적으로 구현했을 때의 성취감을
                좋아합니다. 제가 개발자가 되고 싶은 이유는 동료들과 함께
                창의적이며 도전적인 환경에서 다양한 문제를 해결하고 사람들에게
                긍정적인 영향력을 끼치는 일을 하고 싶기 때문입니다. 제 가치를
                알아주는 회사에서 좋은 사람들과 함께 일하고 싶습니다.
              </p>
            ) : (
              <p className="about-introduce-txt before">
                반갑습니다. 최지이입니다. 저를 클릭해주세요.
                <br />
                <img
                  src={`${process.env.PUBLIC_URL}/images/ico-arrow.png`}
                  alt="화살표"
                />
                <p className="moan">click me!</p>
              </p>
            )}
          </div>
        </div>

        <div className="about-flex">
          <CardFlip data={data1} title={front} />
          <CardFlip data={data2} title={style} />
          <CardFlip data={data3} title={etc} />
          {/* <Card data={data2} />
          <Card data={data3} /> */}
        </div>
      </div>
    </StyledAbout>
  );
}

const StyledAbout = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #000;

  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* margin-top: 50px; */

    &-profileFlex {
      display: flex;
      align-items: center;
      gap: 50px;
      margin-top: 100px;
    }

    &-profile {
      width: 250px;
      height: 250px;
      border-radius: 50%;
      overflow: hidden;
      &-wrap {
        position: relative;
        width: 100%;
        height: 100%;
        perspective: 1100px;
        transform-style: preserve-3d;
        transition: 1s;

        &-front,
        &-back {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
        }
        &-back {
          transform: rotateY(180deg);
        }
      }
      &:hover .about-profile-wrap {
        transform: rotateY(180deg);
      }
    }

    &-introduce {
      align-items: center;
      width: 360px;
      margin-top: 10px;
      font-size: 1.5rem;
      color: #fff;
      transition: all 1s;
      &-txt {
        font-size: 1.7rem;
        color: #fff;
        &.after {
          width: 450px;
          > b.pc {
            display: block;
          }
          > b.mobile {
            display: none;
          }
        }
        &.before {
          position: relative;
          width: 360px;
          > img {
            position: absolute;
            width: 50px;
            transform: rotate(60deg);
          }
        }
      }
      .moan {
        position: absolute;
        left: 65px;
        font-size: 3.5rem;
        color: var(--main-color);
      }
    }

    &-flex {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 30px;
      padding: 0px 139px;
      margin-top: 30px;
    }
  }
  @media screen and (max-width: 1376px) {
    .pageHeader {
      top: 80px;
    }
    .about {
      align-items: flex-start;
      &-profileFlex {
        margin-left: calc(50vw - 300px);
        margin-top: 212px;
      }
      &-flex {
      }
    }
  }
  @media screen and (max-width: 1000px) {
    padding-bottom: 90px;
    .about {
      &-profileFlex {
        margin-left: calc(50vw - 180px);
        flex-direction: column;
        gap: 10px;
      }
      &-introduce {
        &-txt {
          &.before {
            > img {
              display: none;
            }
            > .moan {
              position: relative;
              left: 0;
              text-align: center;
            }
          }
          &.after {
            width: 350px;
            word-wrap: break-word;
            word-break: keep-all;
            > b.pc {
              display: none;
            }
            > b.mobile {
              display: block;
            }
          }
        }
      }
      &-flex {
        margin-top: 25px;
      }
    }
  }
`;
