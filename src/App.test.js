// @ts-check
import { render } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";

import App from "./App";

let getByText;
let getByRole;

describe("#Test Rate Dashboard page", () => {
  beforeEach(() => {
    /** @type {import("@testing-library/react").RenderResult} */
    const app = render(<App />);

    getByText = app.getByText;
    getByRole = app.getByRole;
  });

  test.each([["Rate Dashboard"], ["Load"], ["Base Rate"], ["Date Rate"]])(
    "shold render %s",
    expected => {
      const element = getByText(new RegExp(expected, "i"));
      expect(element).toBeInTheDocument();
    }
  );

  it("should render a grid table", () => {
    const element = getByRole("grid");
    expect(element).toBeInTheDocument();
  });
});
