import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  background-color: #29383c;
  color: #fff;

  a {
    &:visited {
      color: #fff;
    }
  }
`;

export default props => <Footer>{props.children}</Footer>;
