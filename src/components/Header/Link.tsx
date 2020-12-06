import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { change } from '../../redux/reducers/pageSlice';
import { Page } from '../../types';
import styles from './Link.module.scss';

type Props = {
  text: string;
  href: Page;
};

const Link: FC<Props> = ({ text, href }) => {
  const dispatch = useDispatch();
  return (
    <button className={styles.link} onClick={() => dispatch(change(href))}>
      {text}
    </button>
  );
};

export default Link;
