import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { GoRepo, GoRepoForked } from "react-icons/go";

import { Repository } from "../../services/github";
import RepositoryStar from "../repository-star";

const Card = styled.article`
  padding: 1rem;
  border-radius: 0.5rem;
  transition: background-color 0.25s;
  position: relative;
  :hover {
    background-color: #dddddd;
  }
`;

const Title = styled.a`
  font-size: 1.2rem;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: gray;
  margin: 0.5rem 0 0.75rem 0;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Main = styled.main`
  margin: 0 auto;
  width: 80vw;
`;

const InfoList = styled.div`
  display: flex;
  gap: 1rem;
`;

interface RepositoryDisplayProps {
  repository: Repository;
}

export default function RepositoryDisplay({
  repository,
}: RepositoryDisplayProps) {
  return (
    <Card>
      <Title href={repository.html_url} target="_blank">
        <GoRepo /> {repository.name}
      </Title>
      <Description>{repository.description}</Description>
      <InfoList>
        <span>{repository.language}</span>
        <span>
          <AiFillStar /> {repository.stargazers_count}
        </span>
        <span>
          <GoRepoForked /> {repository.forks_count}
        </span>
      </InfoList>
      <RepositoryStar repositoryId={repository.id} />
    </Card>
  );
}
