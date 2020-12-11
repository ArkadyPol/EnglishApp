import styles from './Tasks.module.scss';
import Header from './Header';
import Row from './Row';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get } from '../../../redux/reducers/tasksSlice';
import { RootState } from '../../../redux/reducers';

const Tasks = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const child = useRef<HTMLDivElement>(null);

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
    if (child.current) {
      observer.observe(child.current);
    }
  }, [tasks]);

  const handleObserver = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    const target = entries[0];
    if (target.isIntersecting) {
      dispatch(get());
      observer.disconnect();
    }
  };

  const rows = tasks.map((data, index) => {
    if (index !== tasks.length - 31)
      return <Row data={data} key={data.SentenceID} />;
    else return <Row data={data} key={data.SentenceID} ref={child} />;
  });

  return (
    <div className={styles.tasks}>
      <Header />
      {rows}
    </div>
  );
};

export default Tasks;
