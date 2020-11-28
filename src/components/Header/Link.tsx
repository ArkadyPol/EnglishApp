import React from 'react';
import styles from './Nav.module.scss';

const Link = ({ text }: { text: string }) => {
  return <button className={styles.link}>{text}</button>;
};

export default Link;
