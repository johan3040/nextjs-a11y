'use client';
import { SessionProvider } from 'next-auth/react';

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';

import { AppProps } from 'next/app';

import '../styles/global.css';
import 'highlight.js/styles/github.css';
import { Html } from 'next/document';

hljs.registerLanguage('javascript', javascript);

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
