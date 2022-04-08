import useSWR from "swr";
import styled from "styled-components";

import RepositoryDisplay from "../repository-display";
import { getRepositories } from "../../services/github";

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export default function RepositoryList() {
  const { data, error } = useSWR("/github/repositories", getRepositories);

  if (!data) return <span>Loading...</span>;
  if (error || !data.items) return <span>Error fetching repositories</span>;

  const { items: repositories } = data;
  return (
    <List>
      {repositories.map((repository) => (
        <RepositoryDisplay key={repository.id} repository={repository} />
      ))}
    </List>
  );
}
