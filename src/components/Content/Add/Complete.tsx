import { useDispatch } from 'react-redux';
import styles from './Complete.module.scss';
import { send } from '../../../redux/reducers/addSlice';

const Complete = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.complete}>
      <button className={styles.button} onClick={() => dispatch(send())}>
        Отправить
      </button>
    </div>
  );
};

export default Complete;
