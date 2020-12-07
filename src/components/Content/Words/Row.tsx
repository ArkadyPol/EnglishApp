import { FC } from 'react';
import { Word } from '../../../types';
import styles from './Row.module.scss';

type Props = {
  data: Word;
};

const Row: FC<Props> = ({ data }) => {
  return (
    <div className={styles.row}>
      <div className={styles.num}>{data.Num}</div>
      <div className={styles.word}>{data.Word} </div>
    </div>
  );
};

export default Row;
