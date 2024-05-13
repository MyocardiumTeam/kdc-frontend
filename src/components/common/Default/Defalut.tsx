import Footer from '@common/Footer/Footer';
import Header from '@common/Header/Header';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Default = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Default;
