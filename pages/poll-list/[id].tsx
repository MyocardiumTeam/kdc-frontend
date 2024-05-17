import { Default } from '@common/index';
import PollList from '@pages/pollsList/pollsList';
import type { NextPage } from 'next';

const PollListPage: NextPage = () => {
  return (
    <Default>
      <PollList />
    </Default>
  );
};

export default PollListPage;
