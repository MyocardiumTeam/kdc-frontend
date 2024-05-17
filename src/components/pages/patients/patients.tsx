import { Icon } from '@base/index';
import styles from './patients.module.scss';
import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { GetPatientsParamsType, useLazyGetPatientsQuery } from '../../../store/data-slices';
import Link from 'next/link';

export type PropsCell = {
  ball: string;
  Name: string;
  Birth: string;
  Floor: string;
  id: string;
};

const Patients = () => {
  const columnsName = ['Баллы', 'Пациент', 'Дата рождения', 'Пол', 'Button'];

  const [trigger, { data }] = useLazyGetPatientsQuery();

  const [patientsData, setPatientsData] = useState<GetPatientsParamsType>({
    limit: '12',
    offset: '0',
    order_direction: 'asc',
  });

  useEffect(() => {
    trigger(patientsData);
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
        data.map((patient, index) => (
          <ul
            className={clsx(styles.Table, {
              [styles.Table__PurpleCell]: index % 2 === 0,
              [styles.Table__Element__Last]: index + 1 === data?.length,
            })}
            key={`${index}${patient.userId}`}
          >
            <li key="ball" className={styles.Table__Element}>
              <span style={{ color: 'black' }}>9.8</span>
            </li>
            <li key="name" className={styles.Table__Element}>
              <span style={{ color: 'black' }}>{patient.firstName}</span>
            </li>
            <li key="birth" className={styles.Table__Element}>
              <span style={{ color: 'black' }}>{patient.userBirthDate}</span>
            </li>
            <li key="floor" className={styles.Table__Element}>
              <span style={{ color: 'black' }}>{patient.userGender}</span>
            </li>
            <li key="id" className={clsx(styles.Table__Element)}>
              <Link style={{ color: 'black' }} href={`/poll-list/${patient.userId}`}>
                {patient.userId}
              </Link>
            </li>
          </ul>
        ))}
    </div>
  );
};
export default Patients;
