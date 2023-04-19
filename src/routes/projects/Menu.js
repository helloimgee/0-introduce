import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// import menuLeft from "../../assets/images/menuLeft.svg";
// import menuLeft2 from "../../assets/images/menuLeft-edit.svg";
// import menuRight2 from "../../assets/images/menuRight-edit.svg";

export default function Menu({ allProps, personProps, teamProps }) {
  const [menuIndex, setMenuIndex] = useState(0);

  const handleAll = () => {
    setMenuIndex(0);
    allProps();
  };
  const handlePerson = () => {
    setMenuIndex(1);
    personProps();
  };
  const handleTeam = () => {
    setMenuIndex(2);
    teamProps();
  };
  return (
    <StyledMenu>
      <div className="menu">
        <button
          type="button"
          className={`menu-person ${menuIndex === 0 && "on"}`}
          onClick={handleAll}
        >
          All
        </button>
        <button
          type="button"
          className={`menu-person ${menuIndex === 1 && "on"}`}
          onClick={handlePerson}
        >
          Person
        </button>
        <button
          type="button"
          className={`menu-team ${menuIndex === 2 && "on"}`}
          onClick={handleTeam}
        >
          Team
        </button>
        <div
          className={`underLine 
          ${menuIndex === 0 ? "menu00" : ""} 
          ${menuIndex === 1 ? "menu01" : ""} 
          ${menuIndex === 2 ? "menu02" : ""}
          `}
        />
      </div>
    </StyledMenu>
  );
}

const StyledMenu = styled.div`
  display: flex;
  justify-content: center;
  .menu {
    position: relative;
    display: flex;
    gap: 30px;
    justify-content: center;
    width: auto;
    height: 35px;
    margin-bottom: 20px;
    > button {
      font-size: 1.5rem;
      font-weight: 600;
      color: rgb(255, 255, 255, 0.5);
      cursor: pointer;
      &.on {
        color: #fff;
      }
    }
  }
  .underLine {
    position: absolute;
    left: 0;
    bottom: 0;
    transform: translateX(0);
    width: 30px;
    height: 3px;
    background-color: var(--main-color);
    transition: all 0.4s ease-in-out;
    &.menu01 {
      left: 60px;
      width: 64px;
    }
    &.menu02 {
      left: 155px;
      width: 48px;
    }
  }
`;

Menu.propTypes = {
  allProps: PropTypes.func.isRequired,
  personProps: PropTypes.func.isRequired,
  teamProps: PropTypes.func.isRequired,
};
