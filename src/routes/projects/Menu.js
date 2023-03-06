import React from "react";
import styled from "styled-components";
import menuLeft from "../../assets/images/menuLeft.svg";

export default function Menu() {
  return (
    <StyledMenu>
      <div className="menu">
        <span className="menu-person">Person</span>
        <span className="menu-team">Team</span>
        <i>
          <img src={menuLeft} alt="menuLeft" />
        </i>
      </div>
    </StyledMenu>
  );
}

const StyledMenu = styled.div`
  display: flex;
  justify-content: center;
  .menu {
    position: relative;
    &-person {
      position: absolute;
      top: 25%;
      left: 40px;
      font-size: 1.5rem;
      font-weight: 600;
      color: #222;
    }
    &-team {
      position: absolute;
      top: 25%;
      right: 40px;
      font-size: 1.5rem;
      font-weight: 600;
      color: rgb(255, 255, 255, 0.5);
    }
  }
`;
