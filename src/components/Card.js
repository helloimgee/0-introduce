import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// 아이콘
import redux from "../assets/images/redux.svg";
import styledCo from "../assets/images/styled.png";
import notion from "../assets/images/notion.png";
import api from "../assets/images/api.png";

export default function Card({ data, className }) {
  return (
    <StyledCard className={className}>
      <div className="card center">
        <div className="card-wrap left">
          {data.map((skill) => {
            return (
              <div className="card-wrap-article" key={skill.key}>
                <i className={skill.icon} />
                <span className="card-wrap-article-txt">{skill.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  .card {
    width: 100%;
    height: 500px;
    &-wrap {
      gap: 5px;
      padding: 0 110px;
      &-article {
        display: flex;
        justify-content: center;
        i {
          display: inline-block;
          width: 50px;
          height: 50px;
          font-size: 50px;
          color: var(--main-color);
          margin-right: 10px;
          &.redux {
            background: url(${redux}) no-repeat 0 0px / 50px 50px;
          }
          &.styled {
            background: url(${styledCo}) no-repeat 0 0px / 50px 50px;
          }
          &.notion {
            background: url(${notion}) no-repeat 0 0px / 50px 50px;
          }
          &.api {
            background: url(${api}) no-repeat 0 0px / 50px 50px;
          }
          &.none {
            display: none;
          }
        }
        &-txt {
          font-size: 2.5rem;
          font-weight: 600;
          color: #fff;
          white-space: pre-wrap;
        }
      }
    }
  }
`;

Card.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
  className: PropTypes.string.isRequired,
};
