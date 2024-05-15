import { Icon } from '@base/index';
import styles from './home.module.scss';
import React from 'react';
import TableRow, { PropsCell } from './ex';

const Home = () => {
  const columnsName = ['Баллы', 'Пациент', 'Дата рождения', 'Пол', 'Button'];

  const patients: PropsCell[] = [
    {
      data: {
        ball: '10.0',
        Name: 'Ivanov ivan ivanovich',
        Birth: '19.23.2043',
        Floor: 'Man',
        id: '123',
      },
    },
    {
      data: {
        ball: '10.0',
        Name: 'Ivanov ivan ivanovich',
        Birth: '19.23.2043',
        Floor: 'Man',
        id: '123',
      },
    },
    {
      data: {
        ball: '10.0',
        Name: 'Ivanov ivan ivanovich',
        Birth: '19.23.2043',
        Floor: 'Man',
        id: '123',
      },
    },
    {
      data: {
        ball: '10.0',
        Name: 'Ivanov ivan ivanovich',
        Birth: '19.23.2043',
        Floor: 'Man',
        id: '123',
      },
    },
  ];

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

      <ul>
        <ul className={styles.TittleColumn}>
          {columnsName.map((column, index) => (
            <li key={index} className={styles.TittleColumn__Element}>
              <span style={{ color: 'black' }}>{column}</span>
            </li>
          ))}
        </ul>
        <ul className={styles.TittleColumn}>
          {patients.map((patient, index) => (
            <TableRow
              data={{
                ball: '10.0',
                Name: 'Ivanov ivan ivanovich',
                Birth: '19.23.2043',
                Floor: 'Man',
                id: '123',
              }}
              key={index}
            />
          ))}
        </ul>
      </ul>
    </div>
  );
};
export default Home;
