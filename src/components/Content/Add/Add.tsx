import Complete from './Complete';
import styles from './Add.module.scss';
import TextArea from './TextArea';

const Edit = () => {
  return (
    <div className={styles.add}>
      <TextArea />
      <Complete />
    </div>
  );
};

export default Edit;
