import { Icon } from '@base/index';
import styles from './home.module.scss';
import React from 'react';

const Home = () => {
  const columnsName = ['Баллы', 'Пациент', 'Дата рождения', 'Пол', ' '];

  const rows = [
    { type: 'second' },
    { type: 'third' },
    { type: 'second' },
    { type: 'third' },
    { type: 'second' },
    // Я не ебу пока что как правильно это сделать в зависимости от кнопки сортировки, потому что я её не сделал хихи
  ];

  return (
    <main className={styles.Home}>
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
      <div className={styles.Table}>
        <div className={styles.FirstTableStroke}>
          {columnsName.map((column, index) => (
            <React.Fragment key={index}>
              <div className={styles.Column}>
                <span className={styles.ColumnName}>{column}</span>
              </div>
              {index !== columnsName.length - 1 && <div className={styles.Separator}></div>}
            </React.Fragment>
          ))}
        </div>
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={rowIndex % 2 === 0 ? styles.SecondTableStroke : styles.ThirdTableStroke}
          >
            {/* Здесь разместите содержимое каждой строки */}
            {columnsName.map((column, colIndex) => (
              <React.Fragment key={colIndex}>
                <div className={styles.Column}>{/* Содержимое столбца */}</div>
                {colIndex !== columnsName.length - 1 && <div className={styles.Separator}></div>}
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
};
export default Home;
