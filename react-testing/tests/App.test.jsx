import { render, screen, fireEvent } from "@testing-library/react";
import App from "../src/App.jsx";

describe("App", () => {

  it("renders the heading", () => {
    render(<App />);
    expect(screen.getByRole("heading", { name: /react app/i })).toBeInTheDocument();
  });

  it("increments the count", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /increment/i });
    const count = screen.getByTestId("count");

    expect(count).toHaveTextContent("0");
    fireEvent.click(button);
    expect(count).toHaveTextContent("1");
  });
});
