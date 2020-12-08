import styles from './Words.module.scss';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers';
import { useEffect } from 'react';
import { get } from '../../../redux/reducers/wordsSlice';
import Row from './Row';

const Words = () => {
  const dispatch = useDispatch();
  const words = useSelector((state: RootState) => state.words);

  useEffect(() => {
    dispatch(get());
  }, []);

  const rows = words.map((data) => <Row data={data} key={data.Num} />);

  return (
    <div className={styles.words}>
      <Header />
      <Header />
      <Header />
      <Header />
      {rows}
    </div>
  );
};
export default Words;
