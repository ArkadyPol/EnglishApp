import { forwardRef } from 'react';
import { Task } from '../../../types';
import styles from './Row.module.scss';

type Props = {
  data: Task;
};

type Ref = HTMLDivElement;

const Row = forwardRef<Ref, Props>(({ data }, ref) => {
  return (
    <div className={styles.row} ref={ref}>
      <div>{data.SentenceID}</div>
      <div>{data.Sentence}</div>
      <div className={styles.num}>{data.Num}</div>
      <div className={styles.word}>{data.Word} </div>
    </div>
  );
});

export default Row;
