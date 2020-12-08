import styles from './Sentences.module.scss';
import Header from './Header';
import Row from './Row';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get } from '../../../redux/reducers/sentencesSlice';
import { RootState } from '../../../redux/reducers';

const Sentences = () => {
  const dispatch = useDispatch();
  const sentences = useSelector((state: RootState) => state.sentences);

  useEffect(() => {
    dispatch(get());
  }, []);

  const rows = sentences.map((data) => (
    <Row data={data} key={data.SentenceID} />
  ));

  return (
    <div className={styles.sentences}>
      <Header />
      {rows}
    </div>
  );
};

export default Sentences;
