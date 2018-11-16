import React from "react";
import styled from "styled-components";

import Currency from "./currency";
import ProgressBar from "./progressBar";

const List = styled.ul`
  margin: 12px 0;
  padding: 0;
`;

const Item = styled.li`
  display: inline-block;
  width: 33%;
  text-align: center;
`;

export default props => (
  <React.Fragment>
    <ProgressBar progress={props.progress} />

    <List>
      <Item>
        <Currency amount={props.target} />
        <div>Target</div>
      </Item>
      <Item>
        <strong>{props.equity}%</strong>
        <div>Equity</div>
      </Item>
      <Item>
        <Currency amount={props.current} />
        <div>Raised</div>
      </Item>
    </List>
  </React.Fragment>
);
