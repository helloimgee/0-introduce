import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export default function PageHeader({ children, headerBg }) {
  return (
    <StyledPageHeader>
      <h1 className="hedaer-tit">{children}</h1>
      <span className="header-bg">{headerBg}</span>
    </StyledPageHeader>
  );
}

const StyledPageHeader = styled.div`
  .header {
    &-tit {
      font-size: 5.6rem;
      font-weight: 900;
      text-transform: uppercase;
    }
    &-bg {
      font-size: 11.2rem;
      font-weight: 900;
      opacity: 0.07;
    }
  }
`;

PageHeader.propTypes = {
  children: PropTypes.node.isRequired,
  headerBg: PropTypes.string.isRequired,
};
