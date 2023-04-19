import React from "react";
import styled from "styled-components";

export default function Loading() {
  return (
    <StyledLoading className="loading">
      <div className="loading-wrap">
        <div className="loading-wrap-img">
          <img
            src={`${process.env.PUBLIC_URL}/images/loading.gif`}
            alt="로딩이미지"
          />
        </div>
        <div className="loading-wrap-bg" />
      </div>
    </StyledLoading>
  );
}

const StyledLoading = styled.div`
  .loading-wrap {
    &-img {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1000;
      width: 50px;
      height: 50px;
      > img {
        width: 100%;
      }
    }

    &-bg {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #000;
      opacity: 0.6;
      z-index: 999;
    }
  }
`;
