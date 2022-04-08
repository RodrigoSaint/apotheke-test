import Chance from "chance";
import { render, screen } from "@testing-library/react";

import RepositoryDisplay from "./index";

const chance = new Chance();

describe("RepositoryDisplay", () => {
  beforeEach(() => {
    localStorage.clear();
  });
  it("Renders with all info", () => {
    const repository = {
      name: chance.name(),
      description: chance.sentence(),
      forks_count: chance.integer(),
      html_url: chance.url(),
      id: chance.integer(),
      language: chance.word(),
      stargazers_count: chance.integer(),
    };

    render(<RepositoryDisplay repository={repository} />);

    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      repository.html_url
    );
    expect(screen.getByText(repository.name)).toBeInTheDocument();
    expect(screen.getByText(repository.description)).toBeInTheDocument();
    expect(screen.getByText(repository.language)).toBeInTheDocument();
    expect(screen.getByText(repository.stargazers_count)).toBeInTheDocument();
    expect(screen.getByText(repository.forks_count)).toBeInTheDocument();
  });
});
