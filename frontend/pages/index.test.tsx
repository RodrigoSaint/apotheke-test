import Home from "./index";
import { render, screen } from "@testing-library/react";

jest.mock("../services/github", () => ({
  getRepositories: jest.fn(),
}));

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: "Github Trending Repositories",
    });

    expect(heading).toBeInTheDocument();
  });
});
