'use client';
import React from 'react';

import s from './Header.module.scss';
import Image from 'next/image';
import { authSlice } from '../../../store/auth';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store/store';
import { useRouter } from 'next/router';
import { RouteEnum } from '@constants/route';

const Header = () => {
  const { logout } = authSlice.actions;
  const useAppDispatch = () => useDispatch<AppDispatch>();

  const dispatch = useAppDispatch();

  const { push } = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    push(RouteEnum.HOME);
  };

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
        <button type="button" onClick={handleLogout}>
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
