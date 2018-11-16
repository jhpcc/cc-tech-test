import React from "react";

import Layout from "./layout";
import Card from "../components/card";
import Filter from "../components/filter";
import { Grid, GridItem } from "../components/grid";

const renderItems = items =>
  items.map(item => (
    <GridItem key={item.id}>
      <a href="#">
        <Card {...item} />
      </a>
    </GridItem>
  ));

const headerProps = <Filter />;

const footerProps = [
  <a href="">Link one</a>,
  <a href="">Link two</a>,
  <a href="">Link three</a>
];

export default props => (
  <Layout
    title="Investment Oppurtunities"
    headerProps={headerProps}
    footerProps={footerProps}
  >
    <Grid>{renderItems(props.items)}</Grid>
  </Layout>
);
