'use client';
import Head from 'next/head';

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';

import { AppProps } from 'next/app';

import '../styles/global.css';
import 'highlight.js/styles/github.css';
import { Html } from 'next/document';

hljs.registerLanguage('javascript', javascript);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Accessible accordion</title>
        <meta property="og:title" content="Accessible accordion" key="title" />
      </Head>

      <header>
        <h1 style={{ marginBottom: '1em' }}>Accessible components</h1>
      </header>
      <main style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
