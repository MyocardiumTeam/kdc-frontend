import { Icon } from '@base/index';
import styles from './pollsList.module.scss';
import React, { useEffect } from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useLazyGetPollsQuery } from '../../../store/data-slices';
import Link from 'next/link';

export type PropsCell = {
  ball: string;
  Name: string;
  Birth: string;
  Floor: string;
  id: string;
};

const PollList = () => {
  const columnsName = ['Тип опроса', 'дата прохождения'];

  const [trigger, { data }] = useLazyGetPollsQuery();

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    console.log(id);
    if (typeof id === 'string') {
      trigger(id);
    }
  }, []);

  const rows = [
    { type: 'second' },
    { type: 'third' },
    { type: 'second' },
    { type: 'third' },
    { type: 'second' },
  ];

  return (
    <div className={styles.Home}>
      <h1 className={styles.Home__Title}>Пациенты </h1>
      <div className={styles.SearchArea}>
        <div className={styles.SearchBarView}>
          <Icon icon={'SEARCHICON'} viewBox="0 0 32 32" className={styles.SearchIcon}></Icon>
          <input className={styles.SearchBarInput} placeholder="Поиск"></input>
        </div>
        <div className={styles.SortView}>
          <h3 className={styles.WidgetText}>Показывать</h3>
          <button className={styles.SortButton}></button>
        </div>
      </div>

      <ul className={clsx(styles.Table, styles.Table__TitleRow)}>
        {columnsName.map((column, index) => (
          <li key={index} className={styles.Table__Element}>
            <span style={{ color: 'black' }}>{column}</span>
          </li>
        ))}
      </ul>

      {data &&
        data.report.map(({ operations, survey_name }, index) => (
          <Link
            key={`${index}${operations[0].id}`}
            href={`/poll/${operations[0].id}`}
            className={clsx(styles.Table, {
              [styles.Table__PurpleCell]: index % 2 === 0,
              [styles.Table__Element__Last]: index + 1 === data.report.length,
            })}
          >
            <li key="id" className={clsx(styles.Table__Element)}>
              <a style={{ color: 'black' }}>{survey_name}</a>
            </li>
            <li key="floor" className={styles.Table__Element}>
              <span style={{ color: 'black' }}>{operations[0].timestamp}</span>
            </li>
          </Link>
        ))}
    </div>
  );
};
export default PollList;
