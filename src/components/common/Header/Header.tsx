import React from 'react';

import s from './Header.module.scss';
import Image from 'next/image';
import { isAuthorized } from '../../../store/auth';

const Header = () => {
  console.log(isAuthorized());
  return (
    <header className={s.Header}>
      <Image
        className={s.Header__Logo}
        src={'/images/Logo.png'}
        alt={'Logo'}
        width={500}
        height={500}
        fetchPriority="high"
        priority
      />
    </header>
  );
};

export default Header;
