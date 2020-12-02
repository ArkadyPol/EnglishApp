import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { change } from '../../redux/reducers/pageSlice';
import styles from './Nav.module.scss';

type Props = {
  text: string;
  href: string;
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
