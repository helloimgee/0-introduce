/* eslint-disable jsx-a11y/media-has-caption */
import React from "react";
import styled, { keyframes } from "styled-components";
import Preloader from "../../components/Preloader";

export default function Home() {
  return (
    <StyledHome>
      <Preloader />
      <div className="home">
        <div className="home-txt">
          <p className="home-txt-wrap">
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
          </p>
          <span className="job moan">I{`'`}m frontend web developer</span>
        </div>
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
  height: 100vh;

  .home {
    &-video {
      &-mobile {
        display: block;
      }
      &-pc {
        display: none;
      }
    }

    &-txt {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      &-wrap {
        &-container {
        }
      }
      p {
        .archivo {
          font-size: 5rem;
          color: #fff;
        }
        .moan {
          font-size: 3rem;
        }
        .break-m {
          display: inline;
        }
      }
    }
  }

  @media screen and (min-width: 1100px) {
    .home {
      position: relative;
      margin: 0 auto;

      &-txt {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        &-wrap {
          &-container {
            position: relative;
            left: -50%;
            display: flex;
            width: 600px;
            height: 5rem;
            overflow: hidden;
          }
          .message {
            position: absolute;
            right: 10px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-end;
            gap: 5rem;
            white-space: nowrap;
            animation: ${messageSlide} 24s ease-in-out infinite;
            overflow: hidden;
          }
          .name {
            position: absolute;
            top: 0;
            right: 15%;
          }
          .archivo {
            font-size: 5rem;
            font-weight: 900;
            color: #fff;
            line-height: 5rem;
          }
        }
        .job {
          font-size: 3rem;
        }
      }
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
    }
  }
`;
