export interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  language: string;
  forks_count: number;
}

export interface GithubRepositoryResponse {
  total_count: number;
  items: Repository[];
}

// https://api.github.com/search/repositories?q=created:%3E2017-01-10&sort=stars&order=desc
export interface GithubRepositoryQuery {
  q: string;
  sort: "stars";
  order: "asc" | "desc";
}

export const getRepositories = async () => {
  const query: GithubRepositoryQuery = {
    q: "created:>2017-01-10",
    sort: "stars",
    order: "desc",
  };

  const queryString = Object.keys(query)
    .map(
      (key) =>
        `${key}=${encodeURIComponent(
          query[key as keyof GithubRepositoryQuery]
        )}`
    )
    .join("&");

  const response = await fetch(
    `https://api.github.com/search/repositories?${queryString}`
  );
  const repositoryMetadata =
    (await response.json()) as GithubRepositoryResponse;

  return repositoryMetadata;
};
