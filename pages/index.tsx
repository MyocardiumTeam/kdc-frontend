import { Default } from '@common/index';
import Home from '@pages/Home/home';
import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <Default>
      <Home />
    </Default>
  );
};

export default HomePage;
