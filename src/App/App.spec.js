import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("can render a App", () => {
  const container = document.createElement("h1");
  ReactDOM.render(<App />, container);
  expect(container).toBeTruthy();
});
