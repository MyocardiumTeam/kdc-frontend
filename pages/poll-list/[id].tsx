import { Default } from '@common/index';
import PollList from '@pages/pollsList/pollsList';
import type { GetServerSidePropsContext } from 'next';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = context.params?.id;

  if (!id) return { props: {} };

  return {
    props: {
      id,
    },
  };
}

const PollListPage = ({ id }: { id: string }) => {
  return (
    <Default>
      <PollList id={id} />
    </Default>
  );
};

export default PollListPage;
