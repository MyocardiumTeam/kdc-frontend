import { Default } from '@common/index';
import PollInfo from '@pages/poll/poll';
import type { NextPage } from 'next';

const PollListPage: NextPage = () => {
  return (
    <Default>
      <PollInfo params={{ id }} />
    </Default>
  );
};

export async function getServerSideProps(ctx) {
  const { id } = ctx.params; // Get the id parameter from the URL

  // Fetch data using the id parameter

  return {
    props: {
      // Pass the fetched data as props
    },
  };
}

export default PollListPage;
