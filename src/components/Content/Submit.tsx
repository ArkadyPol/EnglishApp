import { FC } from 'react';
import styles from './Submit.module.scss';

type Props = {
  text: string;
  onClick(): void;
};

const Submit: FC<Props> = ({ text, onClick }) => {
  return (
    <div className={styles.submit}>
      <button className={styles.button} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default Submit;
