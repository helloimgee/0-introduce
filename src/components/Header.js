import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <ul>
        <li className="home">
          <Link to="/">
            <i className="fas fa-home" />
            <span>Home</span>
          </Link>
        </li>
        <li className="about">
          <Link to="/about">
            <i className="fas fa-user" />
            <span>About</span>
          </Link>
        </li>
        <li className="projects">
          <Link to="/projects">
            <i className="fas fa-tasks" />
            <span>Portfolio</span>
          </Link>
        </li>
        <li className="github">
          <Link to="/github">
            <i className="fab fa-github" />
            <span>Github</span>
          </Link>
        </li>
      </ul>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: fixed;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;

  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    li {
      a {
        display: inline-block;
        padding: 14px;
        border-radius: 30px;
        transition: all 0.2s;
        background-color: var(--gray-color); // transition
        vertical-align: middle;
        span {
          position: absolute; // transition
          opacity: 0; // transition
          font-size: 1.6rem;
          font-weight: 600;
          text-transform: uppercase;
          margin-left: 10px;
          color: #fff;
          line-height: 25px;
        }
        i {
          width: 25px;
          height: 25px;
          text-align: center;
          line-height: 25px;
          font-size: 20px;
          color: #fff;
        }
      }
      &:hover {
        a {
          border-radius: 30px;
          background-color: var(--main-color);
          span {
            position: relative;
            opacity: 1;
            transition: all 0.3s ease;
          }
        }
      }
    }
  }
`;
