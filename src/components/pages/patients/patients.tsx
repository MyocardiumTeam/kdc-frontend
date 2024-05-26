import s from './patients.module.scss';
import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useLazyGetPatientsQuery } from '../../../store/data-slices';
import Link from 'next/link';
import usePatientsData, { columnsName } from './common';
import { TableWrapper } from '@common/index';
import Image from 'next/image';

const Patients = () => {
  const [trigger, { data }] = useLazyGetPatientsQuery();

  const { patientsData, setPatientsData } = usePatientsData(); //todo

  useEffect(() => {
    trigger(patientsData);
  }, []);

  const [search, setSearch] = useState('');
  const [limit, setLimit] = useState('12');

  const [notificationStates, setNotificationStates] = useState({});

  const handleButtonClick = (userId) => {
    setNotificationStates((prevStates) => ({
      ...prevStates,
      [userId]: !prevStates[userId],
    }));
  };

  return (
    <TableWrapper
      title="Пациенты"
      searchValue={search}
      onChangeSearchValue={setSearch}
      limit={limit}
      setLimit={setLimit}
    >
      <ul className={clsx(s.Table, s.Table__TitleRow)}>
        <li className={s.Table__Element}>
          <span className={s.Table__ColumnsStyle}>Баллы</span>
        </li>
        <li className={s.Table__Element}>
          <span className={s.Table__ColumnsStyle}>Пациент</span>
        </li>
        <li className={s.Table__Element}>
          <span className={s.Table__ColumnsStyle}>Дата рождения</span>
        </li>
        <li className={clsx(s.Table__Element, s.Table__Element__Gender)}>
          <span className={s.Table__ColumnsStyle}>Пол</span>
        </li>
        <li className={s.Table__Element}>
          <span className={s.Table__ColumnsStyle}>Сведения</span>
        </li>
      </ul>
      {data?.map((patient, index) => (
        <ul
          className={clsx(s.Table, {
            [s.Table__PurpleCell]: index % 2 === 0,
            [s.Table__Element__Last]: index + 1 === data?.length,
          })}
          key={`${index}${patient.userId}`}
        >
          <li className={s.Table__Element}>
            <span>{patient.userTotalScore}</span>
          </li>
          <li className={s.Table__Element}>
            <span>
              {patient.firstName} {patient.lastName} {patient.patronymic}
            </span>
            <button onClick={() => handleButtonClick(patient.userId)}>
              <Image
                className={s.Table__NotificationIcons}
                src={
                  notificationStates[patient.userId]
                    ? '/images/NotificationClosed.png'
                    : '/images/Notification.png'
                }
                alt={notificationStates[patient.userId] ? 'Notification Closed' : 'Notification'}
                width={100}
                height={100}
              />
            </button>
          </li>
          <li className={clsx(s.Table__Element__BirthDay, s.Table__Element)}>
            <span>
              {new Date(patient.userBirthDate).toLocaleString('default', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </span>
          </li>
          <li className={s.Table__Element__Gender}>
            <span>{patient.userGender}</span>
          </li>

          <li className={s.Table__Element}>
            <Link
              href={`/type-poll/${patient.userId}`}
              className={clsx(s.Table__Element)}
              key={`${index}${patient.userId}`}
            >
              <Image
                className={s.Table__PillPollIcons}
                src={'/images/Polls.png'}
                alt={'Polls'}
                width={100}
                height={100}
              />
            </Link>
            <Link
              href={`/type-poll/${patient.userId}`}
              className={clsx(s.Table__Element)}
              key={`${index}${patient.userId}`}
            >
              <Image
                className={s.Table__PillPollIcons}
                src={'/images/Pills.png'}
                alt={'Pills'}
                width={100}
                height={100}
              />
            </Link>
          </li>
        </ul>
      ))}
    </TableWrapper>
  );
};
export default Patients;
