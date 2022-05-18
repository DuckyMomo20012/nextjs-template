import { store } from '@store/store.js';
import { Provider } from 'react-redux';

const CustomReduxProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
export { CustomReduxProvider };
