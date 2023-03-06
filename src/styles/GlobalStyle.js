import { createGlobalStyle } from "styled-components";
import Reset from "styled-reset";

import MOANHANDoff from "../static/fonts/MOANHAND.woff";
import MOANHANDttf from "../static/fonts/MOANHAND.ttf";

const GlobalStyle = createGlobalStyle`
  ${Reset}
  * {
    box-sizing: border-box;
  }
  :root {
    --main-color: #E54343;
    --gray-color: #2b2a2a;
  }
  html {
    font-family: 'Roboto','Noto Sans KR',AppleSDGothicNeo-Regular,'Malgun Gothic','맑은 고딕',dotum,'돋움',sans-serif;
    font-size: 62.5%;
  }
  body {
    line-height: 1.5;
    overflow-x: hidden;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    border: 0;
    background-color: transparent;
    cursor: pointer
  }
  input, textarea, select {
    border: none;
    font-family: "Roboto", "Noto Sans KR", sans-serif;
    resize: none;
    :focus {
      outline: none;
    }
  }

  // 공통 클래스
  .point {
    color: #E54343;
  }
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  // font
  .archivo {
    font-family: 'Archivo Black', sans-serif;
  }
  .cairoRegular {
    font-family: "cairo", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  .cairoBold {
    font-family: "cairo", sans-serif;
    font-weight: 700;
    font-style: normal;
  }
  .cairoBlack {
    font-family: "cairo", sans-serif;
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: "Moan Hand";
    src:
        url(${MOANHANDoff}) format("woff"),
        url(${MOANHANDttf}) format("ttf");
  }

  .moan {
    font-family: "Moan Hand", serif;
  }
`;

export default GlobalStyle;
