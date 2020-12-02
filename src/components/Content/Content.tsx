import { useSelector } from 'react-redux';
import { RootState } from '../..//redux/reducers';
import Add from './Add/Add';
import Learn from './Learn/Learn';

const Content = () => {
  let container;
  const page = useSelector((state: RootState) => state.page);
  switch (page) {
    case 'learn':
      container = <Learn />;
      break;
    case 'add':
      container = <Add />;
  }
  return <div className="content">{container}</div>;
};

export default Content;
