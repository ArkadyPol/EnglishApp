import React from 'react';
import styles from './Container.module.scss';

const Task = ({ data }: { data: string }) => {
  return <div className={styles.task}>{data}</div>;
};

export default Task;
