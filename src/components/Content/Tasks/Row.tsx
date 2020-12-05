import { FC } from 'react';
import { Task } from '../../../types';
import styles from './Row.module.scss';

type Props = {
  data: Task;
};

const Row: FC<Props> = ({ data }) => {
  return (
    <div className={styles.row}>
      <div>{data.Sentence}</div>
      <div className={styles.num}>{data.Num}</div>
      <div className={styles.word}>{data.Word} </div>
    </div>
  );
};

export default Row;
