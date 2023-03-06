import React from "react";
import styled from "styled-components";
import PageHeader from "../../components/PageHeader";

export default function About() {
  return (
    <StyledAbout>
      <PageHeader headerBg="ABOUT ME">
        ABOUT <span className="point">ME</span>
      </PageHeader>
    </StyledAbout>
  );
}

const StyledAbout = styled.div``;
