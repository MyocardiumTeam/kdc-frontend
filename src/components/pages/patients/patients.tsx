import { Icon } from '@base/index';
import s from './patients.module.scss';
import React, { useEffect } from 'react';
import clsx from 'clsx';
import { useLazyGetPatientsQuery } from '../../../store/data-slices';
import Link from 'next/link';
import usePatientsData, { columnsName } from './common';

const Patients = () => {
  const [trigger, { data }] = useLazyGetPatientsQuery();

  const { patientsData, setPatientsData } = usePatientsData();

  useEffect(() => {
    trigger(patientsData);
  }, []);

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
        data.map((patient, index) => (
          <Link
            href={`/poll-list/${patient.userId}`}
            className={clsx(s.Table, {
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
          </Link>
        ))}
    </div>
  );
};
export default Patients;
