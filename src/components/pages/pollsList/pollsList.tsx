import { Icon } from '@base/index';
import s from './pollsList.module.scss';
import React, { useEffect } from 'react';
import clsx from 'clsx';
import { useLazyGetPollsQuery } from '../../../store/data-slices';
import Link from 'next/link';
import { columnsName, PollInfoProps } from './common';

const PollList = ({ id }: PollInfoProps) => {
  const [trigger, { data }] = useLazyGetPollsQuery();

  useEffect(() => {
    trigger(id);
  }, [id]);

  return (
    <div className={s.Home}>
      <h1 className={s.Home__Title}>Пациенты </h1>
      <div className={s.SearchArea}>
        <div className={s.SearchBarView}>
          <Icon icon={'SEARCHICON'} viewBox="0 0 32 32" className={s.SearchIcon}></Icon>
          <input className={s.SearchBarInput} placeholder="Поиск"></input>
        </div>
        <div className={s.SortView}>
          <h3 className={s.WidgetText}>Показывать</h3>
          <button className={s.SortButton}></button>
        </div>
      </div>

      <ul className={clsx(s.Table, s.Table__TitleRow)}>
        {columnsName.map((column, index) => (
          <li key={index} className={s.Table__Element}>
            <span style={{ color: 'black' }}>{column}</span>
          </li>
        ))}
      </ul>

      {data &&
        data.report.map(({ operations, survey_name }, index) => (
          <Link
            key={`${index}${operations[0].id}`}
            href={`/poll/${operations[0].id}`}
            className={clsx(s.Table, {
              [s.Table__PurpleCell]: index % 2 === 0,
              [s.Table__Element__Last]: index + 1 === data.report.length,
            })}
          >
            <li key="id" className={clsx(s.Table__Element)}>
              <a style={{ color: 'black' }}>{survey_name}</a>
            </li>
            <li key="floor" className={s.Table__Element}>
              <span style={{ color: 'black' }}>{operations[0].timestamp}</span>
            </li>
          </Link>
        ))}
    </div>
  );
};
export default PollList;
