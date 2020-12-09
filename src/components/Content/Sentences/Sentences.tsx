import styles from './Sentences.module.scss';
import Header from './Header';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get } from '../../../redux/reducers/sentencesSlice';
import { RootState } from '../../../redux/reducers';
import Row from './Row';

const Sentences = () => {
  const dispatch = useDispatch();
  const { sentences } = useSelector((state: RootState) => state.sentences);
  const penultimateChild = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dispatch(get());
  }, [dispatch]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(handleObserver, options);
    if (penultimateChild.current) {
      observer.observe(penultimateChild.current);
    }
  }, [sentences]);

  const rows = sentences.map((data, index) => {
    if (index !== sentences.length - 2)
      return <Row data={data} key={data.SentenceID} />;
    else
      return <Row data={data} key={data.SentenceID} ref={penultimateChild} />;
  });

  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting) {
      dispatch(get());
    }
  };

  return (
    <div className={styles.sentences}>
      <Header />
      {rows}
    </div>
  );
};

export default Sentences;
