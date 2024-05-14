import Footer from '@common/Footer/Footer';
import Header from '@common/Header/Header';
import React from 'react';

import s from './Default.module.scss';

type Props = {
  children: React.ReactNode;
};

const Default = ({ children }: Props) => {
  return (
    <>
      <Header />
      <div className={s.DefaultWrapper}>{children}</div>
      <Footer />
    </>
  );
};

export default Default;
