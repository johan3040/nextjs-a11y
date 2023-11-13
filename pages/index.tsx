import React from 'react';
import { AccordionContainer } from '../components/accordion/AccordionContainer';
import { ToastWrapper } from '../components/toast/ToastWrapper';
import { FormWrapper } from '../components/form/FormWrapper';
import { useSession, signIn, signOut } from 'next-auth/react';
import Head from 'next/head';
import { Flex } from '../components/flex';
import Image from 'next/image';

const HomePage = ({ data }) => {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>Accessible components</title>
        <meta property="og:title" content="Accessible accordion" key="title" />
      </Head>
      <header>
        <Flex justifyContent="space-between">
          <h1 style={{ marginBottom: '1em' }}>
            Accessible components
          </h1>
          {session ? (
            <Flex alignItems="center" gap="0.5rem">
              <Image
                src={session.user.image}
                alt="user avatar"
                width={32}
                height={32}
                unoptimized
              />
              <p style={{ marginLeft: '0.5em' }}>
                {session?.user.name || session?.user.email}
              </p>
              <button onClick={() => signOut()}>Sign out</button>
            </Flex>
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
  const data = JSON.stringify({
    time:
      new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString()
  });
  return { props: { data } };
}

export default HomePage;
