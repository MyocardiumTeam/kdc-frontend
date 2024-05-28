import { Icon } from '@base/index';
import s from './pollsList.module.scss';
import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useLazyGetPollsQuery } from '../../../store/data-slices';
import Link from 'next/link';
import { columnsName, PollInfoProps } from './common';
import { TableWrapper } from '@common/index';

const PollList = ({ id }: PollInfoProps) => {
  const [trigger, { data }] = useLazyGetPollsQuery();

  const [search, setSearch] = useState('');
  const [limit, setLimit] = useState('12');

  useEffect(() => {
    trigger(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <TableWrapper
      title="Опросы"
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
        data.report.map(({ operations, survey_name }, index) => (
          <Link
            key={`${index}${operations[0].id}`}
            href={`/poll/${operations[0].id}`}
            className={clsx(s.Table, s.Table__WhiteCell, {
              [s.Table__PurpleCell]: index % 2 === 0,
              [s.Table__Element__Last]: index + 1 === data.report.length,
            })}
          >
            <li key="id" className={clsx(s.Table__Element)}>
              <a style={{ color: 'black' }}>{survey_name}</a>
            </li>{' '}
            <li key="floor" className={s.Table__Element}>
              <span style={{ color: 'black' }}>{`${new Date(operations[0].timestamp).toLocaleString(
                'default',
                {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                },
              )}`}</span>
            </li>
          </Link>
        ))}
    </TableWrapper>
  );
};
export default PollList;
