import { ColorSchemeScript } from '@mantine/core';
import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class _Document extends Document {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Html lang="en">
        <Head />
        <title>Create Next App</title>
        <meta content="Generated by create next app" name="description" />
        <link href="/favicon.ico" rel="icon" />
        <ColorSchemeScript defaultColorScheme="auto" />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
