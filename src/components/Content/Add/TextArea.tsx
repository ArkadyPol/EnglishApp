import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers';
import { change } from '../../../redux/reducers/addSlice';
import styles from './Add.module.scss';

const TextArea = () => {
  const value = useSelector((state: RootState) => state.add);
  const dispatch = useDispatch();
  return (
    <textarea
      className={styles.textarea}
      placeholder="Введите предложение на английском"
      value={value}
      onChange={(e) => dispatch(change(e.target.value))}
    ></textarea>
  );
};

export default TextArea;
