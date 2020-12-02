import { FC } from 'react';
import styles from './TextArea.module.scss';

type Props = {
  value: string;
  onChange(value: string): void;
  placeholder: string;
};

const TextArea: FC<Props> = ({ value, onChange, placeholder }) => {
  return (
    <textarea
      className={styles.textarea}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    ></textarea>
  );
};

export default TextArea;
