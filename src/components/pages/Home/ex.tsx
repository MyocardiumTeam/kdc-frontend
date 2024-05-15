import styles from './home.module.scss';
import React from 'react';

const TableRow = ({ data }: PropsCell) => {
  return (
    <ul>
      {Object.values(data).map((el, index) => (
        <li className={styles.TittleColumn} key={`${index}${el}`}>
          {el}
        </li>
      ))}
    </ul>
  );
};

export default TableRow;

export type PropsCell = {
  data: {
    ball: string;
    Name: string;
    Birth: string;
    Floor: string;
    id: string;
  };
};
