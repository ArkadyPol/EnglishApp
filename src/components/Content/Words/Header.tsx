import styles from './Words.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <div>№</div>
      <div>Слово</div>
    </div>
  );
};

export default Header;
