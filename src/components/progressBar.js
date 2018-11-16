import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: #ccc;
  overflow: hidden;
  position: relative;
`;

const Detail = styled.div`
  position: absolute;
  color: white;
  z-index: 1;
  top: 2px;
  left: 4px;
`;

const ProgressBar = styled.div`
  background: #8bc34a;
  padding: 4px;
  height: 24px;
  animation-name: scale;
  animation-duration: 2s;
  transition-timing-function: ease;

  @keyframes scale {
    from {
      transform: translateX(-100%);
    }

    to {
      transform: translateX(0%);
    }
  }
`;

const calcWidth = progress => (progress >= 100 ? 100 : progress);

export default props => (
  <Container>
    <Detail>{props.progress}%</Detail>
    <ProgressBar style={{ width: `${calcWidth(props.progress)}%` }} />
  </Container>
);
