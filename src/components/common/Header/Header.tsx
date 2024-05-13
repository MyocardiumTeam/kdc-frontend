import React from 'react';

import s from './Header.module.scss';
import Image from 'next/image';

const Header = () => {
  return (
    <header className={s.Header}>
      <Image src={'/images/Logo.png'} alt={'Logo'} width={477} height={100} fetchPriority="high" />
    </header>
  );
};

export default Header;
