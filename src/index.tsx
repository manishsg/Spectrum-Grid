import * as React from "react";
import { render } from "react-dom";
import { Provider, lightTheme } from "@adobe/react-spectrum";

import App from "./App";

const rootElement = document.getElementById("root");
render(
  <Provider theme={lightTheme} colorScheme={"light"}>
    <App />
  </Provider>,
  rootElement
);
