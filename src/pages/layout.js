import React from "react";
import { default as styled, createGlobalStyle } from "styled-components";

import { Grid, GridItem, GridItemTwoThirds } from "../components/grid";
import Header from "../components/header";
import Footer from "../components/footer";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html, body {
        margin: 0;
        padding: 0;
    }

    body {
        color: #29383c;
        font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
    }

    h1 {
      margin: 0;
      border-bottom: 1px solid;
    }

    a, a:visited {
      color: #29383c;
      text-decoration: none;
    }

    p {
        color: #747474;
        line-height: 1.5;
        font-size: 0.9em;
    }
`;

const Logo = styled.div`
  width: 100%;
  margin: 12px;
  height: 30px;
  overflow: hidden;
  position: relative;

  img {
    position: absolute;
    transition: all 0.3s ease;
    &:hover {
      transform: translateY(-31px);
    }
  }
`;

export default props => (
  <React.Fragment>
    <GlobalStyle />
    <Header>
      <Grid>
        <Logo>
          <a href="">
            <img
              src="https://d37kyofbevv0u9.cloudfront.net/dist/assets/img/cc-logo.svg"
              alt="Crowdcube Logo"
            />
          </a>
        </Logo>
        <GridItem>
          <h1>{props.title || "Crowdcube"}</h1>
        </GridItem>
        <GridItemTwoThirds>{props.headerProps}</GridItemTwoThirds>
      </Grid>
    </Header>
    <main>{props.children}</main>
    <Footer>
      <Grid>
        {(props.footerProps || []).map((item, key) => (
          <GridItem key={key}>{item}</GridItem>
        ))}
      </Grid>
    </Footer>
  </React.Fragment>
);
