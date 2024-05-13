import { useEffect } from 'react';
import { useLazyGetPatientsQuery } from '../../../store/data-slices';
import styles from './home.module.scss';

const Home = () => {
  return <main className={styles.Home}></main>;
};
export default Home;
