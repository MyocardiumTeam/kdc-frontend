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
        width={600}
        height={600}
        fetchPriority="high"
        priority
      />
      <div className={s.Header__AccView}>
        <p className={s.Header__AccName}>Рафальский И.А.</p>
        <button>
          <Image
            className={s.Header__ExitIcon}
            src={'/images/Exit.png'}
            alt={'Logo'}
            width={700}
            height={700}
            fetchPriority="high"
            priority
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
