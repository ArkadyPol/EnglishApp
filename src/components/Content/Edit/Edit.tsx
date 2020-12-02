import Complete from './Complete';
import styles from './Edit.module.scss';
import TextArea from './TextArea';

const Edit = () => {
  return (
    <div className={styles.edit}>
      <TextArea />
      <Complete />
    </div>
  );
};

export default Edit;
