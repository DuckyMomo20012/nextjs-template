import { Provider } from 'react-redux';
import { store } from '@/store/store.js';

const ReduxProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
export { ReduxProvider };
