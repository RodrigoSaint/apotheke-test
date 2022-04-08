import styled from "styled-components";
import { useState } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

interface RepositoryStarProps {
  repositoryId: number;
}

const RepositoryStarContainer = styled.div`
  padding: 0.5rem;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
`;

export default function RepositoryStar({ repositoryId }: RepositoryStarProps) {
  const [isStared, setStar] = useState(localStorage[repositoryId] === "true");
  const IconSize = 22;

  const onToggle = () => {
    localStorage[repositoryId] = !isStared;
    setStar(!isStared);
  };

  return (
    <RepositoryStarContainer onClick={onToggle}>
      {isStared ? (
        <AiFillStar data-testid="with-star" size={IconSize} />
      ) : (
        <AiOutlineStar data-testid="without-star" size={IconSize} />
      )}
    </RepositoryStarContainer>
  );
}
