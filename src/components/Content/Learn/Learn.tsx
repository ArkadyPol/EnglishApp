import Submit from '../Submit';
import styles from './Learn.module.scss';
import Task from './Task';
import TextArea from '../TextArea';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers';
import { change } from '../../../redux/reducers/learnSlice';

const Learn = () => {
  const value = useSelector((state: RootState) => state.learn);
  const dispatch = useDispatch();
  return (
    <div className={styles.learn}>
      <Task data="What is your name?" />
      <TextArea
        value={value}
        placeholder="Введите перевод"
        onChange={(value) => dispatch(change(value))}
      />
      <Submit text="Продолжить" onClick={() => console.log('Продолжить')} />
    </div>
  );
};

export default Learn;
