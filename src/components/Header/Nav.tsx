import styles from './Nav.module.scss';
import Link from './Link';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link text="Учить" href="learn" />
      <Link text="Редактировать" href="edit" />
    </nav>
  );
};

export default Nav;
