import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers';
import { change } from '../../../redux/reducers/learnSlice';
import styles from './Learn.module.scss';

const TextArea = () => {
  const value = useSelector((state: RootState) => state.learn);
  const dispatch = useDispatch();
  return (
    <textarea
      className={styles.textarea}
      placeholder="Введите перевод"
      value={value}
      onChange={(e) => dispatch(change(e.target.value))}
    ></textarea>
  );
};

export default TextArea;
