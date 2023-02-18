import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders logo", () => {
    const { getByText } = render(<App />);
    const logoElement = getByText(/bananabrann/i);
    expect(logoElement).toBeInTheDocument();
  })
})
