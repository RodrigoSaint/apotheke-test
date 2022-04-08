import { getRepositories } from "./github";

global.fetch = jest.fn();

describe("github service", () => {
  it("getRepositories calls github with correct parameters", async () => {
    const jsonMockedResult = { total_count: 0, items: [] };
    const json = jest.fn().mockResolvedValueOnce(jsonMockedResult);
    (fetch as jest.Mock).mockResolvedValueOnce({
      json,
    });

    const response = await getRepositories();

    expect(fetch).toHaveBeenCalledWith(
      "https://api.github.com/search/repositories?q=created%3A%3E2017-01-10&sort=stars&order=desc"
    );
    expect(json).toHaveBeenCalledTimes(1);
    expect(response).toBe(jsonMockedResult);
  });
});
