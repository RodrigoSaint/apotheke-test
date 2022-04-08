import Chance from "chance";
import { render, screen, fireEvent } from "@testing-library/react";

import RepositoryStar from "./index";

const chance = new Chance();

describe("RepositoryStar", () => {
  beforeEach(() => {
    localStorage.clear();
  });
  it("By default renders without star", () => {
    const repositoryId = chance.integer();
    render(<RepositoryStar repositoryId={repositoryId} />);

    const icon = screen.getByTestId("without-star");

    expect(icon).toBeInTheDocument();
  });

  it("on click toggle star", () => {
    const repositoryId = chance.integer();
    render(<RepositoryStar repositoryId={repositoryId} />);

    const withoutStar = screen.getByTestId("without-star");
    fireEvent.click(withoutStar);
    const withStar = screen.getByTestId("with-star");

    expect(withStar).toBeInTheDocument();
  });

  it("loads localhost state", () => {
    const repositoryId = chance.integer();
    localStorage.setItem(repositoryId.toString(), "true");
    render(<RepositoryStar repositoryId={repositoryId} />);
    const withStar = screen.getByTestId("with-star");

    expect(withStar).toBeInTheDocument();
  });
});
