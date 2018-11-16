import React from "react";
import styled from "styled-components";

const margin = 12;

const Grid = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
`;

const GridSpaceBetween = styled(Grid)`
  justify-content: space-between;
`;

const GridItemBase = styled.div`
  margin: ${margin}px;
`;

const GridItem = styled(GridItemBase)`
  display: inline-block;
  width: calc(33.3% - ${margin * 2}px);

  @media (max-width: 900px) {
    width: calc(50% - ${margin * 2}px);
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const GridItemTwoThirds = styled(GridItemBase)`
  display: inline-block;
  width: calc(66.6% - ${margin * 2}px);
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export { GridItemBase, Grid, GridSpaceBetween, GridItem, GridItemTwoThirds };
