export interface Owner {
  login: string;
  id: number;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  repos_url: string;
  type: string;
}

export interface License {
  key: string;
  name: string;
  url: string;
}

export interface Repository {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  owner: Owner;
  html_url: string;
  description: string;
  url: string;
  homepage: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  forks_count: number;
  mirror_url?: any;
  open_issues_count: number;
  license: License;
  allow_forking: boolean;
  is_template: boolean;
  topics: string[];
  open_issues: number;
  score: number;
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

  console.log(repositoryMetadata);

  return repositoryMetadata;
};
