/* eslint-disable no-useless-escape */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
// import { send, init } from "emailjs-com";

// 불러오기
import Preloader from "../../components/Preloader";
import PageHeader from "../../components/PageHeader";
import logo from "../../assets/images/logo.png";
import arrowMain from "../../assets/images/arrowMain.png";
import Loading from "../../components/Loading";

export default function Mail() {
  // // SDK 초기 설정
  // useEffect(() => {
  //   init("service_gh1k58b");
  // }, []);

  const nameMsgRef = useRef();
  const emailMsgRef = useRef();
  const formRef = useRef();
  const msgMsgRef = useRef();

  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [msgValue, setMsgValue] = useState("");
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsFormFilled(nameValue && emailValue && msgValue);
  }, [nameValue, emailValue, msgValue]);

  const handleNameValue = (e) => {
    let delRegex;
    if (/[ㄱ-ㅎㅏ-ㅣ가-힣]/.test(e.target.value)) {
      // 한글일 경우 -> 한글 제외한 문자 모두 삭제
      delRegex = /[^ㄱ-ㅎㅏ-ㅣ가-힣]/g;
    } else {
      // 영어일 경우 -> 영어, 공백 제외한 문자 모두 삭제
      delRegex = /[^a-zA-Z\s]/g;
    }
    e.target.value = e.target.value.replace(delRegex, "");
    setNameValue(e.target.value);
  };

  const handleEmailValue = (e) => {
    setEmailValue(e.target.value);
    const inputValue = e.target.value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (inputValue.length === 0 || emailPattern.test(e.target.value)) {
      emailMsgRef.current.innerText = "";
    } else {
      emailMsgRef.current.innerText = "올바른 email 양식을 입력해주세요.";
    }
  };

  const handleMsgValue = (e) => {
    setMsgValue(e.target.value);
    const inputValue = e.target.value;
    if (inputValue.length === 0 || inputValue.length >= 5) {
      setMsgValue(e.target.value);
      msgMsgRef.current.innerText = "";
    } else {
      msgMsgRef.current.innerText = "메시지를 5자 이상 입력해주세요.";
    }
  };

  // form 전송 이벤트 설정
  const onSubmitForm = (e) => {
    e.preventDefault();
    const namePattern = /^[^ㄱ-ㅎㅏ-ㅣ]+$/gi;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!namePattern.test(nameValue)) {
      // 분리된 자음, 모음을 가지고 있을 경우
      alert("올바른 이름 양식을 입력해주세요(자음, 모음 분리 금지)");
      return;
    }
    if (!emailPattern.test(emailValue)) {
      alert("올바른 email 양식을 입력해주세요.");
      return;
    }
    if (msgValue.length < 5) {
      alert("메시지를 5자 이상 입력해주세요.");
    } else {
      nameMsgRef.current.innerText = "";
      setIsLoading(true);
      emailjs
        .sendForm(
          "service_gh1k58b",
          "template_2eyj18g",
          formRef.current,
          "0pBfaeAzzPKcXBX5d"
        )
        .then(
          (result) => {
            setIsLoading(false);
            alert("전송되었습니다.");
            console.log(result.text);
            setNameValue("");
            setEmailValue("");
            setMsgValue("");
          },
          (error) => {
            alert("전송을 실패했습니다");
            console.log(error.text);
          }
        );
    }
  };

  return (
    <StyledMail className="mail">
      <Preloader />
      <PageHeader headerBg="MAILING" className="pageHeader">
        TO <span className="point">CONTACT</span>
      </PageHeader>
      <div className="mail-wrap">
        <div className="mail-wrap-arrow">
          <img src={arrowMain} alt="화살표" />
        </div>
        <div className="mail-wrap-left">
          <div className="mail-wrap-left-logo">
            <img src={logo} alt="로고" />
          </div>
        </div>
        <form ref={formRef} className="mail-wrap-form" onSubmit={onSubmitForm}>
          <div className="mail-wrap-form-txt">
            <p className="cairoBold">
              Lets make something amazing
              <span className="moan">write to me</span>
            </p>
          </div>
          <div className="mail-wrap-form-item">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="off"
              required
              onChange={handleNameValue}
              value={nameValue}
            />
            <p ref={nameMsgRef} />
          </div>
          <div className="mail-wrap-form-item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="off"
              onChange={handleEmailValue}
              value={emailValue}
              required
            />
            <p ref={emailMsgRef} />
          </div>
          <div className="mail-wrap-form-item">
            {/* <label htmlFor="message">Message</label> */}
            <textarea
              id="message"
              name="message"
              autoComplete="off"
              placeholder="Type your message here"
              required
              minLength={5}
              onChange={handleMsgValue}
              value={msgValue}
            />
            <p ref={msgMsgRef} />
          </div>
          <button
            className={`mail-wrap-form-btn ${isFormFilled ? "on" : ""}`}
            type="submit"
            // disabled={!isFormFilled}
          >
            SEND
          </button>
        </form>
      </div>
      {isLoading && <Loading />}
    </StyledMail>
  );
}

const StyledMail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: 0 130px;
  background-color: #000;

  .mail-wrap {
    position: relative;
    width: 700px;
    &-arrow {
      position: absolute;
      top: 55%;
      left: -130px;
    }
    &-left {
      > p {
        font-size: 2rem;
        color: #fff;
      }
      &-logo {
        > img {
        }
      }
    }
    &-form {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 100%;

      &-txt {
        margin-top: 10px;
        .cairoBold {
          position: relative;
          font-size: 4.2rem;
          color: #fff;
          text-align: center;

          .moan {
            position: absolute;
            bottom: -45%;
            left: 20%;
            font-size: 4.2rem;
            color: var(--main-color);
            text-align: center;
          }
        }
      }
      &-item {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 3px;
        label {
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          font-size: 1.8rem;
          /* font-weight: 700; */
          color: rgb(255, 255, 255, 0.5);
          margin-bottom: 3px;
        }
        input {
          width: 100%;
          padding: 15px 70px;
          background-color: transparent;
          border-bottom: 2px solid rgb(255, 255, 255, 0.5);
          /* border-radius: 10px; */
          font-size: 1.8rem;
          font-weight: 700;
          color: #fff;
          &::placeholder {
            font-size: 1.8rem;
            color: #fff;
          }
        }
        textarea {
          width: 100%;
          height: 130px;
          background-color: transparent;
          border: 3px solid #fff;
          border-radius: 10px;
          font-size: 1.8rem;
          color: #fff;
          padding: 20px;
          &::placeholder {
            /* font-family: "Moan Hand", serif; */
            font-size: 1.8rem;
            color: rgb(255, 255, 255, 0.5);
          }
        }
        > p {
          font-size: 1.5rem;
          color: var(--main-color);
        }
      }
      &-btn {
        position: relative;
        left: calc(100% - 150px);
        width: 150px;
        font-size: 1.5rem;
        font-weight: 700;
        color: #fff;
        background-color: rgb(255, 255, 255, 0.5);
        /* background-color: var(--main-color); */
        padding: 10px;
        border-radius: 15px;
        &.on {
          background-color: var(--main-color);
        }
      }
    }
  }

  @media screen and (max-width: 1139px) {
    .mail-wrap {
      &-arrow {
        display: none;
      }
    }
  }
  @media screen and (max-width: 810px) {
    .mail-wrap {
      &-form-txt {
        margin-bottom: 40px;
        .cairoBold {
          line-height: 1;
        }
        .moan {
        }
      }
    }
  }
`;
