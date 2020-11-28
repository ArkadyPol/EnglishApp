import React from 'react';
import Complete from './Complete';
import styles from './Learn.module.scss';
import Task from './Task';
import TextArea from './TextArea';

const Learn = () => {
  return (
    <div className={styles.learn}>
      <Task data="What is your name?" />
      <TextArea />
      <Complete />
    </div>
  );
};

export default Learn;
