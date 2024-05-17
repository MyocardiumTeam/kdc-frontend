import { Default } from '@common/index';
import PollInfo from '@pages/poll/poll';
import type { GetServerSidePropsContext } from 'next'; // next page nahui ne nujen (ya tak dumauy);

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = context.params?.id;

  if (!id) return { props: {} };

  return {
    props: {
      id,
    },
  };
}
// 🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸
const PollListPage = ({ id }: { id: string }) => {
  return (
    <Default>
      <PollInfo id={id} />
    </Default>
  );
};

export default PollListPage;

// 🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸
