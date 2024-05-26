import { Icon } from '@base/index';
import s from './poll.module.scss';
import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useLazyGetPollInfoQuery } from '../../../store/data-slices';
import { columnsName, PollInfoProps } from './common';
import { TableWrapper } from '@common/index';

const PollInfo = ({ id }: PollInfoProps) => {
  const [trigger, { data }] = useLazyGetPollInfoQuery();

  useEffect(() => {
    trigger(id);
  }, [id, trigger]);
  const [search, setSearch] = useState('');
  const [limit, setLimit] = useState('12');

  return (
    <TableWrapper
      title="Ответы"
      searchValue={search}
      onChangeSearchValue={setSearch}
      limit={limit}
      setLimit={setLimit}
    >
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
    </TableWrapper>
  );
};
export default PollInfo;
