import express from "express";
import fs from "fs";
import React from "react";
import responseTime from 'response-time';
import { ServerStyleSheet } from "styled-components";
import { renderToString } from "react-dom/server";
import { getInvestments } from "./services/api";

import Investments from "../pages/investments";

const PORT = process.env.APP_PORT || 8888;
const staticTemplate = fs.readFileSync(
  `${__dirname}/../pages/static.html`,
  "UTF-8"
);

const app = express();

app.use(responseTime((request, response, time) => {
  console.log(`${request.url} - Response took - ${time}ms`);
}));

app.use("/public", express.static("public"));

app.get("/api", async (request, response, next) => {
  try {
    const data = await getInvestments();
    response.json(data);
  } catch (e) {
    next(e);
  }
});

app.get("/", async (request, response, next) => {
  try {
    console.log('Rendering Page');
    const data = await getInvestments();
    const sheet = new ServerStyleSheet();
    const html = renderToString(
      sheet.collectStyles(<Investments items={data} />)
    );
    const styleTags = sheet.getStyleTags();
    const markup = staticTemplate
      .replace("{{styles}}", styleTags)
      .replace("{{html}}", html)
      .replace("{{data}}", JSON.stringify(data));
    response.send(markup);
  } catch (e) {
    next(e);
  }
});

const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

process.on("exit", (e) => {
  console.error(e);
  server.close();
});

process.on("uncaughtException", (e) => {
  console.error(e);
  server.close();
});
