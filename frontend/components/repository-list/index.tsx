import type { NextPage } from "next";
import styled from "styled-components";
import { useEffect, useState } from "react";

import RepositoryDisplay from "../repository-display";
import { getRepositories, Repository } from "../../services/github";

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export default function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    getRepositories().then(({ items, total_count }) => {
      setRepositories(items);
    });
  }, []);

  return (
    <List>
      {repositories.map((repository) => (
        <RepositoryDisplay key={repository.id} repository={repository} />
      ))}
    </List>
  );
}
