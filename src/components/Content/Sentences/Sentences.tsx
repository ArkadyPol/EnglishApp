import styles from './Sentences.module.scss';
import Header from './Header';
import Row from './Row';

const Sentences = () => {
  const rows = Array(20)
    .fill('Text')
    .map((text, index) => <Row text={text} key={index} />);

  return (
    <div className={styles.sentences}>
      <Header />
      {rows}
    </div>
  );
};

export default Sentences;
