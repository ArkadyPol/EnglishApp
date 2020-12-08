import styles from './Sentences.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <div>Id</div>
      <div>Предложение</div>
    </div>
  );
};

export default Header;
