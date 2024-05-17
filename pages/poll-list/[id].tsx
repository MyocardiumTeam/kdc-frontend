import { PollsList } from '@pages/index';
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
  return <PollsList id={id} />;
};

export default PollListPage;
