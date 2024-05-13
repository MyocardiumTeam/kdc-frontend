import React from 'react';

import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.Footer}>
      <span className={s.Footer__Note}>Copyright©2023 Инди-студия “Мышеверс”</span>
    </footer>
  );
};

export default Footer;
