import { Icon } from '@base/index';
import styles from './poll.module.scss';
import React, { useEffect } from 'react';
import clsx from 'clsx';
import { useLazyGetPollInfoQuery } from '../../../store/data-slices';

interface PollInfoProps {
  id: string;
}

const PollInfo = ({ id }: PollInfoProps) => {
  const columnsName = ['Вопрос', 'Ответ'];

  const [trigger, { data }] = useLazyGetPollInfoQuery();

  useEffect(() => {
    trigger(id);
  }, [id]);

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
        data.answers.map(({ answer, question }, index) => (
          <ul
            className={clsx(styles.Table, {
              [styles.Table__PurpleCell]: index % 2 === 0,
              [styles.Table__Element__Last]: index + 1 === data.answers?.length,
            })}
            key={`${index}${answer}`}
          >
            <li key="floor" className={styles.Table__Element}>
              <span style={{ color: 'black' }}>{question}</span>
            </li>
            <li key="id" className={clsx(styles.Table__Element)}>
              <a style={{ color: 'black' }}>{answer}</a>
            </li>
          </ul>
        ))}
    </div>
  );
};
export default PollInfo;
