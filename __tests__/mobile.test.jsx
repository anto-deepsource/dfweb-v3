/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import Home from "../src/pages/index";

describe("Mobile menu", () => {
  it("expect HamburgerButton toBeInTheDocument", () => {
    const { getByTestId } = render(<Home />);
    const HamburgerButton = getByTestId("hamburger");
    expect(HamburgerButton).toBeInTheDocument();
  });
});