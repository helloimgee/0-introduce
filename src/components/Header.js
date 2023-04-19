import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  const [load, setLoad] = useState(false);
  const { pathname } = useLocation();
  console.log(pathname);

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 1000);
    return () => setLoad(false);
  }, [pathname]);

  return (
    <StyledHeader className={`header ${load ? "on" : ""}`}>
      <ul>
        <li className="home">
          <Link to="/" className={pathname === "/" ? "on" : ""}>
            <i className="fas fa-home" />
            <span>Home</span>
          </Link>
        </li>
        <li className="about">
          <Link to="/about" className={pathname === "/about" ? "on" : ""}>
            <i className="fas fa-user" />
            <span>About</span>
          </Link>
        </li>
        <li className="projects">
          <Link to="/projects" className={pathname === "/projects" ? "on" : ""}>
            <i className="fas fa-tasks" />
            <span>Portfolio</span>
          </Link>
        </li>
        <li className="mail">
          <Link to="/mail" className={pathname === "/mail" ? "on" : ""}>
            <i className="fa-regular fa-envelope" />
            <span>CONTACT</span>
          </Link>
        </li>
      </ul>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: fixed;
  left: 43px;
  top: 50%;
  z-index: 100;
  transform: translateY(-40%);
  opacity: 0;
  transition: all 1s;
  &.on {
    transform: translateY(-50%);
    opacity: 1;
  }

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
        &.on {
          background-color: var(--main-color);
        }
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
