import { Icon } from '@base/index';
import s from './poll.module.scss';
import React, { useEffect } from 'react';
import clsx from 'clsx';
import { useLazyGetPollInfoQuery } from '../../../store/data-slices';
import { columnsName, PollInfoProps } from './common';

const PollInfo = ({ id }: PollInfoProps) => {
  const [trigger, { data }] = useLazyGetPollInfoQuery();

  useEffect(() => {
    trigger(id);
  }, [id, trigger]);

  return (
    <div className={s.Home}>
      <h1 className={s.Home__Title}>Пациенты </h1>
      <div className={s.SearchArea}>
        <div className={s.SearchBarView}>
          <Icon icon={'MAGNIFIER'} viewBox="0 0 32 32" className={s.SearchIcon}></Icon>
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
        data.answers.map(({ answer, question }, index) => (
          <ul
            className={clsx(s.Table, {
              [s.Table__PurpleCell]: index % 2 === 0,
              [s.Table__Element__Last]: index + 1 === data.answers?.length,
            })}
            key={`${index}${answer}`}
          >
            <li key="floor" className={s.Table__Element}>
              <span style={{ color: 'black' }}>{question}</span>
            </li>
            <li key="id" className={clsx(s.Table__Element)}>
              <span style={{ color: 'black' }}>{answer}</span>
            </li>
          </ul>
        ))}
    </div>
  );
};
export default PollInfo;
