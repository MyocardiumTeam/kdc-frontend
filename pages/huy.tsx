import { Default } from '@common/index';
import Home from '@pages/home/home';
import { Login } from '@pages/index';
import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <Default>
      <Home />
    </Default>
  );
};

export default HomePage;