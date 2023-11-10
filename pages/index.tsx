import React from 'react';
import { AccordionContainer } from '../components/accordion/AccordionContainer';
import { ToastWrapper } from '../components/toast/ToastWrapper';
import { FormWrapper } from '../components/form/FormWrapper';
import { useSession, signIn, signOut } from 'next-auth/react';
import Head from 'next/head';
import { Flex } from '../components/flex';

const HomePage = ({ data }) => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <>
      <Head>
        <title>Accessible components</title>
        <meta property="og:title" content="Accessible accordion" key="title" />
      </Head>
      <header>
        <Flex justifyContent="space-between">
          <h1 style={{ marginBottom: '1em' }}>Accessible components</h1>
          {session ? (
            <button onClick={() => signOut()}>Sign out</button>
          ) : (
            <button onClick={() => signIn()}>Sign in</button>
          )}
        </Flex>
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
  console.log(process.env.GITHUB_ID);
  const data = JSON.stringify({
    time:
      new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
  });
  return { props: { data } };
}

export default HomePage;
