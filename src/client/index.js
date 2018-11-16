import React from "react";
import { hydrate } from "react-dom";

import Investments from "../pages/investments";

const data = window.__DATA__;
hydrate(<Investments items={data} />, document.querySelector("#root"));
