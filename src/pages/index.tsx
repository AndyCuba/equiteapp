import type { NextPage } from 'next';
import React from 'react';
import { GetStaticPropsResult } from 'next';
import { Container } from '@mui/material';
import Navigation from '../components/Navigation/Navigation';
import Main from '../components/Main/Main';
import useMediaQuery from '@material-ui/core/useMediaQuery';

interface Props {}

const Home: NextPage<Props> = ({}) => {
  const widthMatch = useMediaQuery('(max-width: 1200px)');
  return (
    <Container
      disableGutters={widthMatch ? false : true}
      maxWidth="lg"
      sx={{ paddingTop: '40px' }}
    >
      <Navigation />
      <Main />
    </Container>
  );
};

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  return { props: {} };
}

Home.propTypes = {};

export default Home;
