import React from 'react';
import { AccordionContainer } from '../components/accordion/AccordionContainer';
import { ToastWrapper } from '../components/toast/ToastWrapper';
import { FormWrapper } from '../components/form/FormWrapper';
import Head from 'next/head';

const HomePage = ({ data }) => {
  return (
    <>
      <Head>
        <title>Accessible components</title>
        <meta property="og:title" content="Accessible accordion" key="title" />
      </Head>
      <header>
        <h1 style={{ marginBottom: '1em' }}>Accessible components</h1>
      </header>
      <main style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <p>According to the server, the time is: {JSON.parse(data).time}</p>
        <AccordionContainer />
        <ToastWrapper />
        <FormWrapper />
      </main>
    </>
  );
};

export async function getServerSideProps() {
  const data = JSON.stringify({
    time:
      new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
  });
  return { props: { data } };
}

export default HomePage;
