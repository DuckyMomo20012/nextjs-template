import { Provider } from 'react-redux';
import { store } from '@/store/store.js';

const CustomReduxProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
export { CustomReduxProvider };
