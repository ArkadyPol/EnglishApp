import styles from './Nav.module.scss';
import Link from './Link';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link text="Учить" href="learn" />
      <Link text="Добавить" href="add" />
      <Link text="Предложения" href="sentences" />
    </nav>
  );
};

export default Nav;
