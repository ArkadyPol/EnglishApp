import styles from './Tasks.module.scss';
import Header from './Header';
import Row from './Row';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get } from '../../../redux/reducers/tasksSlice';
import { RootState } from '../../../redux/reducers';

const Tasks = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks);

  useEffect(() => {
    dispatch(get());
  }, []);

  const rows = tasks.map((data, index) => <Row data={data} key={index} />);

  return (
    <div className={styles.tasks}>
      <Header />
      {rows}
    </div>
  );
};

export default Tasks;
