import Chance from "chance";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { getRepositories } from "../../services/github";

import RepositoryDisplay from "./index";
import { SWRConfig } from "swr";

const chance = new Chance();

const getMockedRepositoryData = () => ({
  name: chance.name(),
  description: chance.sentence(),
  forks_count: chance.integer(),
  html_url: chance.url(),
  id: chance.integer(),
  language: chance.word(),
  stargazers_count: chance.integer(),
});

jest.mock("../../services/github", () => ({
  getRepositories: jest.fn(),
}));

describe("RepositoryList", () => {
  it("when api responded", async () => {
    const repositories = [
      getMockedRepositoryData(),
      getMockedRepositoryData(),
      getMockedRepositoryData(),
    ];
    (getRepositories as jest.Mock).mockResolvedValue({
      items: repositories,
    });

    render(<RepositoryDisplay />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.getByText("Loading..."));

    repositories.map((repository) =>
      expect(screen.getByText(repository.name)).toBeInTheDocument()
    );
  });
});
