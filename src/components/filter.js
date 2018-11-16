import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  @media (min-width: 900px) {
    text-align: right;
  }
`;

const Panel = styled.div`
  height: ${props => (props.show ? 300 : 0)}px;
  max-width: 100%;
  width: 100%;
  background: #ddd;
  overflow: hidden;
  transition: height 1s ease;
`;

const PanelBody = styled.div`
  padding: 12px;
`;

const Button = styled.button`
  margin: 12px 0 12px 12px;
  border: 2px solid black;
  border-radius: 2px;
  padding: 6px;
  font-size: 1em;
  background: none;
  width: 200px;

  @media (min-width 600px) and (max-width: 900px) {
    position: absolute;
    top: 0;
    right: 12px;
  }
`;

export default () => {
  const [filterVisible, setfilterVisible] = useState(false);
  const filterPanelRef = React.createRef();

  const clickHandler = () => {
    setfilterVisible(filterVisible === false);
  };

  const showFilterPanel = showFilter => {
    return (
      <Panel show={filterVisible}>
        <PanelBody>Hello I am the filter</PanelBody>
      </Panel>
    );
  };

  return (
    <Container ref={filterPanelRef}>
      <div>
        <Button onClick={clickHandler}>
          {filterVisible === true ? "Close" : "Filter Oppurtunities"}
        </Button>
      </div>
      {showFilterPanel(filterVisible)}
    </Container>
  );
};
