import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';
import Providers from '@/app/providers';

export const metadata = {
  title: 'NextJS template',
  description: 'A simple NextJS template',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link href="/favicon.svg" rel="shortcut icon" />
        <link href="/favicon.ico" rel="icon" />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link
          crossOrigin=""
          href="https://fonts.gstatic.com"
          rel="preconnect"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
