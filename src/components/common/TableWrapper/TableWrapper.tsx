import { Icon } from '@base/index';
import s from './TableWrapper.module.scss';
import React from 'react';

interface TableWrapperProps {
  children: React.ReactNode;
  title: string;
  searchValue: string;
  onChangeSearchValue: (value: string) => void;
  limit: string;
  setLimit: (value: string) => void;
}
const TableWrapper = ({ children, title, searchValue, limit }: TableWrapperProps) => {
  return (
    <div className={s.Home}>
      <section className={s.HeaderSection}>
        <h1 className={s.HeaderSection__Title}>{title}</h1>
        <div className={s.SearchArea}>
          <div className={s.SearchBarView}>
            <Icon icon={'MAGNIFIER'} viewBox="0 0 32 32" className={s.SearchBarView__Icon} />
            <input className={s.SearchBarView__Input} placeholder="Поиск" value={searchValue} />
          </div>
          <button className={s.SortButton}>
            <span className={s.SortButton__Text}>{limit}</span>
          </button>
        </div>
      </section>
      {children}
    </div>
  );
};
export default TableWrapper;
