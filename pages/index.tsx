import React from 'react';
import { AccordionContainer } from '../components/accordion/AccordionContainer';
import { ToastWrapper } from '../components/toast/ToastWrapper';
import { FormWrapper } from '../components/form/FormWrapper';

const HomePage = ({ data }) => {
  return (
    <>
      <h2>Hello: {new Date(JSON.parse(data).time).toLocaleDateString()}</h2>
      <AccordionContainer />
      <ToastWrapper />
      <FormWrapper />
    </>
  );
};

export async function getServerSideProps() {
  const data = JSON.stringify({ time: new Date() });
  return { props: { data } };
}

export default HomePage;
