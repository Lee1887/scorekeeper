import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from "./GameForm";

describe("GameForm", () => {
  it("renders two input fields and a button", () => {
    render(<GameForm />);

    const nameOfGameInput = screen.getByLabelText(/name of game/i);
    const playerNamesInput = screen.getByLabelText(/player names/i);
    const submitButton = screen.getByRole("button", { name: /create game/i });

    expect(nameOfGameInput).toBeInTheDocument();
    expect(playerNamesInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('renders a form with the name "Create a new game"', () => {
    render(<GameForm />);
    // test for accessibility
    const form = screen.getByRole("form", { name: "Create a new game" });

    expect(form).toBeInTheDocument();
  });

  it("submits form data when every field is filled out", () => {
    const handleCreate = jest.fn();
    render(<GameForm onCreateGame={handleCreate} />);

    const nameOfGameInput = screen.getByLabelText(/name of game/i);
    const playerNamesInput = screen.getByLabelText(/player names/i);
    const submitButton = screen.getByRole("button", { name: /create/i });

    userEvent.type(nameOfGameInput, "Dodelido");
    userEvent.type(playerNamesInput, ["John", "Jane"]);
    userEvent.click(submitButton);

    expect(handleCreate).toHaveBeenCalledWith({
      nameOfGame: "Dodelido",
      playerNames: ["John", "Jane"],
    });
  });
});
