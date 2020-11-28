import React from 'react';
import styles from './Nav.module.scss';
import Link from './Link';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link text="Учить" />
      <Link text="Редактировать" />
    </nav>
  );
};

export default Nav;
