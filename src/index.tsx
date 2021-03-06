import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';
import './styles.css';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
