import Head from "next/head";
import type { NextPage } from "next";
import styled from "styled-components";

import RepositoryList from "../components/repository-list";

const Main = styled.main`
  margin: 0 auto;
  width: 80vw;
`;

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Github Trending Repositories</title>
        <meta name="description" content="Github Trending Repositories" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <h1>Github Trending Repositories</h1>

        <RepositoryList />
      </Main>
    </div>
  );
};

export default Home;
