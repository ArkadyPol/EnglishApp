import { forwardRef } from 'react';
import { Sentence } from '../../../types';
import styles from './Sentences.module.scss';

type Props = {
  data: Sentence;
};
type Ref = HTMLDivElement;

const Row = forwardRef<Ref, Props>(({ data }, ref) => {
  return (
    <div className={styles.row} ref={ref}>
      <div>{data.SentenceID}</div>
      <div>{data.Sentence}</div>
    </div>
  );
});

export default Row;
