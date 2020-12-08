import styles from './Tasks.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.id}>Id</div>
      <div>Предложение</div>
      <div>№</div>
      <div>Слово</div>
    </div>
  );
};

export default Header;
