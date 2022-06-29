import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

describe("Navigation", () => {
  it("renders a navigation with two buttons", () => {
    render(<Navigation />);

    const playButton = screen.getByRole("button", { name: /play/i });
    const historyButton = screen.getByRole("button", { name: /history/i });

    expect(playButton).toBeInTheDocument();
    expect(historyButton).toBeInTheDocument();
  });
});
