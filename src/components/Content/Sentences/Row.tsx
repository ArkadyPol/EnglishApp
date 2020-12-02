import { FC } from 'react';
import styles from './Sentences.module.scss';

type Props = {
  text: string;
};

const Row: FC<Props> = ({ text }) => {
  return <div className={styles.row}>{text}</div>;
};

export default Row;
