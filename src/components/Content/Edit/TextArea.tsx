import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers';
import { change } from '../../../redux/reducers/editSlice';
import styles from './Edit.module.scss';

const TextArea = () => {
  const value = useSelector((state: RootState) => state.edit);
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
