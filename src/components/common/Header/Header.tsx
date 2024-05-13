import React from 'react';

import s from './Header.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { RouteEnum } from '@constants/route';
const Header = () => {
  const { push } = useRouter();
  return (
    <header className={s.Header}>
      <Image
        src={'/images/Logo.png'}
        alt={'Logo'}
        width={477}
        height={100}
        fetchPriority="high"
        priority
        className={s.Header__Logo}
        onClick={() => {
          push(RouteEnum.HOME);
        }}
      />
    </header>
  );
};

export default Header;
