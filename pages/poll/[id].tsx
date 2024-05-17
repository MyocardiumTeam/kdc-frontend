import { PollInfo } from '@pages/index';
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
const PollListPage = ({ id }: { id: string }) => {
  return <PollInfo id={id} />;
};

export default PollListPage;
