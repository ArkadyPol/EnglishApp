import React from 'react';
import Complete from './Complete';
import styles from './Container.module.scss';
import Task from './Task';
import TextArea from './TextArea';

const Container = () => {
  return (
    <div className={styles.container}>
      <Task data="What is your name?" />
      <TextArea />
      <Complete />
    </div>
  );
};

export default Container;
