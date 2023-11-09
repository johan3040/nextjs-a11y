import React from 'react';
import { AccordionContainer } from '../components/accordion/AccordionContainer';
import { ToastWrapper } from '../components/toast/ToastWrapper';
import { FormWrapper } from '../components/form/FormWrapper';

const HomePage = ({ data }) => {
  return (
    <>
      <header>
        <h1 style={{ marginBottom: '1em' }}>Accessible components</h1>
      </header>
      <main style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h2>Hello: {JSON.parse(data).time}</h2>
        <AccordionContainer />
        <ToastWrapper />
        <FormWrapper />
      </main>
    </>
  );
};

export async function getServerSideProps() {
  const data = JSON.stringify({ time: new Date().toLocaleDateString() });
  return { props: { data } };
}

export default HomePage;
