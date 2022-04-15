import 'windi.css';

import { CustomMantineProvider } from '@provider/CustomMantineProvider.jsx';

function MyApp({ Component, pageProps }) {
  return (
    <CustomMantineProvider>
      <Component {...pageProps} />
    </CustomMantineProvider>
  );
}

export default MyApp;
