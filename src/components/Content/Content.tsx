import { useSelector } from 'react-redux';
import { RootState } from '../..//redux/reducers';
import Add from './Add/Add';
import Learn from './Learn/Learn';
import Sentences from './Sentences/Sentences';
import Tasks from './Tasks/Tasks';
import Words from './Words/Words';

const Content = () => {
  const pages = {
    learn: <Learn />,
    add: <Add />,
    sentences: <Sentences />,
    tasks: <Tasks />,
    words: <Words />,
  };
  const page = useSelector((state: RootState) => state.page);
  return <div className="content">{pages[page]}</div>;
};

export default Content;
