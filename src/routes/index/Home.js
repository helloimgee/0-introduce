/* eslint-disable jsx-a11y/media-has-caption */
import React from "react";
import styled, { keyframes } from "styled-components";
import Preloader from "../../components/Preloader";

export default function Home() {
  return (
    <StyledHome>
      <Preloader />
      <div className="home">
        <div className="home-video">
          <video className="home-video-mobile" autoPlay playsInline loop muted>
            <source
              src={`${process.env.PUBLIC_URL}/videos/main-mobile.mp4`}
              type="video/mp4"
            />
          </video>
          <video
            src={`${process.env.PUBLIC_URL}/videos/main-pc.mp4`}
            className="home-video-pc"
            autoPlay
            playsInline
            loop
            muted
          >
            <source
              src={`${process.env.PUBLIC_URL}/videos/main-pc.mp4`}
              type="video/mp4"
            />
          </video>
        </div>
        <div className="home-txt">
          <div className="home-txt-wrap">
            <div className="home-txt-wrap-container">
              <span className="message archivo">
                <strong>Hello!</strong>
                <strong>안녕하세요!</strong>
                <strong>こんにちは!</strong>
                <strong>你好!</strong>
                <strong>Bonjour!</strong>
                <strong>สวัสดีค่ะ!</strong>
                <strong>Xin chao!</strong>
                <strong>اَلسَّلاَمُ عَلَيْكُمْ!</strong>
                <strong>Hola!</strong>
                <strong>नमस्ते!</strong>
              </span>
            </div>
            <span className="name archivo">I{`'`}m gee</span>
            <br />
          </div>
          <p className="home-txt-job moan">I{`'`}m frontend web developer</p>
        </div>
      </div>
    </StyledHome>
  );
}

const messageSlide = keyframes`
	0% {
		top: 0;
		width: 0;
	}
  5% {
    top: 0;
    width: 100%;
  }
	10% {
    top: 0;
    width: 0;
  }
  11% {
    top: -10rem;
    width: 0;
  }
  15% {
    top: -10rem;
    width: 100%;
  }
  20% {
    top: -10rem;
    width: 0;
  }
  21% {
    top: -20rem;
    width: 0;
  }
  25% {
    top: -20rem;
    width: 100%;
  }
  30% {
    top: -20rem;
    width: 0;
  }
  31% {
    top: -30rem;
    width: 0;
  }
  35% {
    top: -30rem;
    width: 100%;
  }
  40% {
    top: -30rem;
    width: 0;
  }
  41% {
    top: -40rem;
    width: 0;
  }
  45% {
    top: -40rem;
    width: 100%;
  }
  50% {
    top: -40rem;
    width: 0;
  }
  51% {
    top: -50rem;
    width: 0;
  }
  55% {
    top: -50rem;
    width: 100%;
  }
  60% {
    top: -50rem;
    width: 0;
  }
  61% {
    top: -60rem;
    width: 0;
  }
  65% {
    top: -60rem;
    width: 100%;
  }
  70% {
    top: -60rem;
    width: 0;
  }
  71% {
    top: -70rem;
    width: 0;
  }
  75% {
    top: -70rem;
    width: 100%;
  }
  80% {
    top: -70rem;
    width: 0;
  }
  81% {
    top: -80rem;
    width: 0;
  }
  85% {
    top: -80rem;
    width: 100%;
  }
  90% {
    top: -80rem;
    width: 0;
  }
  91% {
    top: -90rem;
    width: 0;
  }
  95% {
    top: -90rem;
    width: 100%;
  }
  100% {
    top: -90rem;
    width: 0;
  }
`;

const StyledHome = styled.div`
  width: 100%;
  min-height: 100vh;

  .home {
    position: relative;
    margin: 0 auto;

    &-video {
      &-mobile {
        display: none;
      }
      &-pc {
        display: block;
        width: 100%;
        height: 100vh;
        object-fit: cover;
      }
    }

    &-txt {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      &-wrap {
        position: relative;
        display: flex;
        width: 600px;
        height: 5.6rem;
        overflow: hidden;
        .message {
          position: absolute;
          right: 50%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-end;
          gap: 5rem;
          white-space: nowrap;
          overflow: hidden;
          animation: ${messageSlide} 24s ease-in-out infinite;
        }
        .name {
          position: absolute;
          top: 0;
          right: 13%;
        }
        .archivo {
          font-size: 5rem;
          font-weight: 900;
          color: #fff;
          line-height: 5rem;
        }
      }
      &-job {
        font-size: 3rem;
      }
    }
  }

  @media screen and (max-width: 1100px) {
    position: relative;
    .home {
      &-video {
        &-mobile {
          display: block;
          width: 100%;
          height: 100vh;
          object-fit: cover;
        }
        &-pc {
          display: none;
        }
      }

      &-txt {
        top: 50%;
        left: 25%;
        transform: translate(0);
        &-wrap {
          width: 400px;
          overflow: visible;
          left: 20px;
          &-container {
            position: absolute;
            top: -100%;
            width: 100%;
            height: 100%;
            overflow: hidden;
            .message {
              align-items: flex-start;
              position: absolute;
              left: 0;
            }
          }
          .name {
            position: absolute;
            left: 0;
          }
        }
        .job {
        }
      }
    }
  }
`;
