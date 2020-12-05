import styles from './Nav.module.scss';
import Link from './Link';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link text="Учить" href="learn" />
      <Link text="Добавить" href="add" />
      <Link text="Предложения" href="sentences" />
      <Link text="Задачи" href="tasks" />
    </nav>
  );
};

export default Nav;
