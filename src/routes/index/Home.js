/* eslint-disable jsx-a11y/media-has-caption */
import React from "react";
import styled from "styled-components";

export default function Home() {
  return (
    <StyledHome>
      <div className="home">
        <div className="home-txt">
          <p>
            <span className="archivo">Hello! </span>
            <span className="archivo">I{`'`}m gee</span>
            <br />
            <span className="moan">I{`'`}m frontend web developer</span>
          </p>
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

const StyledHome = styled.div`
  width: 100%;
  height: 100vh;
  .home {
    &-txt {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      p {
        .archivo {
          font-size: 5rem;
          color: #fff;
        }
        .moan {
          font-size: 3rem;
        }
      }
    }
    &-video {
      &-mobile {
        display: block;
      }
      &-pc {
        display: none;
      }
    }
  }
  @media screen and (min-width: 1100px) {
    .home {
      position: relative;
      margin: 0 auto;

      &-txt {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        p {
          text-align: center;
          word-break: keep-all;
          .archivo {
            font-size: 5rem;
            color: #fff;
          }
          .moan {
            color: #222;
            font-size: 5rem;
          }
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
