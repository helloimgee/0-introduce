/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

// 불러오기
import PageHeader from "../../components/PageHeader";
import data from "../../assets/data/porfolioList";

export default function Detail() {
  const { name } = useParams();
  const portfolio = data.filter((project) => {
    if (project.name === name) {
      return project;
    }
    return null;
  });
  // const portfolioObj = portfolio[0];
  const handleBlank = () => {
    window.open(`${portfolio[0].link}`, "_blank");
  };

  return (
    <StyledDetail>
      <PageHeader headerBg="WORKS">
        It&apos;s <span>{name}</span>
      </PageHeader>
      <div className="detail">
        <div className="detail-info">
          <img
            src={`${process.env.PUBLIC_URL}/images/${portfolio[0].mainImg}`}
            alt="이미지"
          />
          <div className="detail-info-wrap">
            <h2>[ {portfolio[0].name} ]</h2>
            <ul className="detail-info-detail">
              <li>
                <i className="fas fa-user" />
                {portfolio[0].participant}
              </li>
              <li>
                <i className="fa-solid fa-check" />
                {portfolio[0].percent}
              </li>
              <li>
                <i className="far fa-calendar-alt" />
                {portfolio[0].period}
              </li>
              <li>
                <i className="fa-regular fa-file-image" />
                {portfolio[0].response}
              </li>
            </ul>
          </div>
          <ul className="detail-info-skill">
            {portfolio[0].tech.map((skill) => {
              return <li>{skill}</li>;
            })}
          </ul>

          {portfolio[0].description.map((desc) => {
            return (
              <div className="detail-info-desc">
                <p>{desc.introduce}</p>
                <p>{desc.role}</p>
                <p>{desc.background}</p>
                <p>{desc.thought}</p>
              </div>
            );
          })}

          <p className="detail-info-link">
            Link: <span onClick={handleBlank}>{portfolio[0].link}</span>
          </p>
        </div>
        <div className="detail-process">
          {portfolio[0].image.map((image) => {
            return (
              <div key={image.tit}>
                <img
                  src={`http://13.209.17.86:3000/${image.name}`}
                  alt="이미지"
                />
                <div className="detail-process-tit">
                  <p>{image.tit}</p>
                  <p>{image.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </StyledDetail>
  );
}

const StyledDetail = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-bottom: 100px;
  background-color: #000;

  .detail {
    max-width: 1380px;
    min-height: 100vh;
    padding-left: 120px;
    padding-top: 350px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    &-info {
      flex-shrink: 1;
      color: #fff;
      > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      &-wrap {
        display: flex;
        align-items: center;
        margin-top: 5px;
        > h2 {
          font-size: 2rem;
          font-weight: 700;
          color: var(--main-color);
          margin-right: 15px;
        }
      }

      &-skill {
        margin-top: 5px;
        li {
          display: inline-block;
          border: 1px solid #fff;
          /* background-color: red; */
          padding: 5px 10px;
          /* border-radius: 20px; */
          margin-right: 3px;
        }
      }
      &-detail {
        display: flex;
        li {
          font-size: 1.5rem;
          color: #fff;
          margin-right: 13px;
          i {
            margin-right: 5px;
            color: var(--main-color);
          }
        }
      }
      &-desc {
        margin-top: 10px;
        > p {
          font-size: 1.8rem;
          margin: 5px 0;
          white-space: pre-wrap;
        }
      }
      &-link {
        margin-top: 15px;
        font-size: 1.8rem;
        span {
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }

    &-process {
      margin-top: 30px;
      flex-shrink: 1;

      img {
        width: 100%;
      }
      &-tit {
        margin: 10px 0 20px;
        > p {
          font-size: 1.8rem;
          /* font-style: italic; */
          color: #fff;
          text-align: left;
          margin: 5px 0;
          white-space: pre-wrap;
        }
        > p:nth-of-type(1) {
          font-size: 1.9rem;
          font-weight: 700;
        }
      }
    }
  }
`;
