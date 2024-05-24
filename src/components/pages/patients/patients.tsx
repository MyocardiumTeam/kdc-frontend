import { Icon } from '@base/index';
import s from './patients.module.scss';
import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useLazyGetPatientsQuery } from '../../../store/data-slices';
import Link from 'next/link';
import usePatientsData, { columnsName } from './common';
import { TableWrapper } from '@common/index';

const Patients = () => {
  const [trigger, { data }] = useLazyGetPatientsQuery();

  const { patientsData, setPatientsData } = usePatientsData(); //todo

  useEffect(() => {
    trigger(patientsData);
  }, []);

  const [search, setSearch] = useState('');
  const [limit, setLimit] = useState('12');

  return (
    <TableWrapper
      title="Пациенты"
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
        data.map((patient, index) => (
          <ul
            className={clsx(s.Table, s.Table__ElementsTable, {
              [s.Table__PurpleCell]: index % 2 === 0,
              [s.Table__Element__Last]: index + 1 === data?.length,
            })}
            key={`${index}${patient.userId}`}
          >
            <li key="ball" className={s.Table__Element}>
              <span style={{ color: 'black' }}>9.8</span>
            </li>
            <li key="name" className={s.Table__Element}>
              <span style={{ color: 'black' }}>
                {patient.firstName} {patient.lastName} {patient.patronymic}
              </span>
            </li>
            <li key="birth" className={s.Table__Element}>
              <span style={{ color: 'black' }}>
                {new Date(patient.userBirthDate).toLocaleString('default', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
            </li>
            <li key="floor" className={s.Table__Element}>
              <span style={{ color: 'black' }}>{patient.userGender}</span>
            </li>

            <li key="poll" className={s.Table__Element}>
              <Link
                href={`/type-poll/${patient.userId}`}
                className={clsx(s.Table__Element)}
                key={`${index}${patient.userId}`}
                style={{ color: 'black' }}
              >
                Опросы
              </Link>
            </li>
            <li key="Pill" className={s.Table__Element}>
              <Link
                href={`/type-poll/${patient.userId}`}
                className={clsx(s.Table__Element)}
                key={`${index}${patient.userId}`}
                style={{ color: 'black' }}
              >
                Таблетки
              </Link>
            </li>
          </ul>
        ))}
    </TableWrapper>
  );
};
export default Patients;
