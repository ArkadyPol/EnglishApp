import styles from './Tasks.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <div>Предложение</div>
      <div>№</div>
      <div>Слово</div>
    </div>
  );
};

export default Header;
