import React from 'react';
import styles from './Container.module.scss';

const TextArea = () => {
  return (
    <textarea
      className={styles.textarea}
      placeholder="Введите перевод"
    ></textarea>
  );
};

export default TextArea;
