import { FC } from 'react';
import { Sentence } from '../../../types';
import styles from './Sentences.module.scss';

type Props = {
  data: Sentence;
};

const Row: FC<Props> = ({ data }) => {
  return (
    <div className={styles.row}>
      <div>{data.SentenceID}</div>
      <div>{data.Sentence}</div>
    </div>
  );
};

export default Row;
