import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

const CustomQueryClientProvider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <>
        {children}
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </>
    </QueryClientProvider>
  );
};

export { CustomQueryClientProvider };
