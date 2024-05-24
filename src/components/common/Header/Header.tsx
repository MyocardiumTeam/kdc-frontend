import React from 'react';

import s from './Header.module.scss';
import Image from 'next/image';
import { isAuthorized } from '../../../store/auth';
import { Icon } from '@base/index';

const Header = () => {
  console.log(isAuthorized());
  return (
    <header className={s.Header}>
      <Image
        className={s.Header__Logo}
        src={'/images/Logo.png'}
        alt={'Logo'}
        width={600}
        height={600}
        fetchPriority="high"
        priority
      />
      <p className={s.Header__AccName}>Рафальский И.А.</p>
      <Icon icon={'EXITICON'} className={s.Header__ExitIcon}></Icon>
    </header>
  );
};

export default Header;
