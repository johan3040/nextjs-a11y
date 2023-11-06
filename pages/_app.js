'use client';
import Head from 'next/head';

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';

import { AccordionContainer } from '../components/accordion/AccordionContainer';
import { ToastWrapper } from '../components/toast/ToastWrapper';
import { FormWrapper } from '../components/form/FormWrapper';

import '../styles/global.css';
import 'highlight.js/styles/github.css';

hljs.registerLanguage('javascript', javascript);

export default function Home() {
  return (
    <>
      <Head>
        <title>Accessible accordion</title>
        <meta property="og:title" content="Accessible accordion" key="title" />
      </Head>
      <header>
        <h1 style={{marginBottom: '1em'}}>Accessible components</h1>
      </header>
      <main style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <AccordionContainer />
        <ToastWrapper />
        <FormWrapper />
      </main>
    </>
  );
}
