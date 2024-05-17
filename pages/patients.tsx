import { Default } from '@common/index';
import Patients from '@pages/patients/patients';
import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <Default>
      <Patients />
    </Default>
  );
};

export default HomePage;
