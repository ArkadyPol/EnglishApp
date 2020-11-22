import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { change } from '../../redux/store';
import styles from './Container.module.scss';

const TextArea = () => {
  const value = useSelector((state: any) => state);
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
