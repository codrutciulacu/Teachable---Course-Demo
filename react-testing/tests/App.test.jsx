import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../src/App.jsx";
import '@testing-library/jest-dom';
import { waitFor } from "@testing-library/react";

describe("App", () => {

  beforeEach(() => {
    global.fetch = vi.fn(() => {
      return Promise.resolve({
        json: () => Promise.resolve({ results: [{ name: { first: "Codrut" } }] })
      })
    });
  });

  it("renders the heading", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: /react app/i })).toBeInTheDocument();
  });

  it("increments the count", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /increment/i });
    const count = screen.getAllByText("0");

    fireEvent.click(button);

    expect(count[0]).toHaveTextContent("1");
  });

  it("should set the name on button click", () => {
    render(<App />);

    const setNameButton = screen.getByRole("button", { name: /set name/i });
    const nameDiv = screen.getByTestId("name");

    expect(nameDiv).toHaveTextContent("Loading...");
    fireEvent.click(setNameButton);
    expect(nameDiv).toHaveTextContent("My Name");
  })

  it("should print input", async () => {
    render(<App />);

    const nameTextBox = screen.getByRole("textbox");
    const nameDiv = screen.getAllByText("Loading...");

    await userEvent.type(nameTextBox, "Codrut")

    expect(nameDiv[0]).toHaveTextContent("Codrut")
  })

  it("should display mocked name", async () => {
    render(<App />);


    await waitFor(() => {
      const nameDiv = screen.getByText("Codrut");

      expect(nameDiv).toBeInTheDocument()
    });
  })
});
