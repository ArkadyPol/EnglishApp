import styles from './Add.module.scss';
import Submit from '../Submit';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers';
import { change, send } from '../../../redux/reducers/addSlice';
import TextArea from '../TextArea';

const Add = () => {
  const value = useSelector((state: RootState) => state.add);
  const dispatch = useDispatch();
  return (
    <div className={styles.add}>
      <TextArea
        value={value}
        placeholder="Введите предложение на английском"
        onChange={(value) => {
          dispatch(change(value));
        }}
      />
      <Submit text="Отправить" onClick={() => dispatch(send())} />
    </div>
  );
};

export default Add;
