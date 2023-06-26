import { render, screen } from "@testing-library/react";
import App from "../components/App";

describe("App", () => {
  test("App rendering", () => {
    render(<App />);
    expect(screen.getByTestId("gallery-box")).toBeInTheDocument();
  });
});
