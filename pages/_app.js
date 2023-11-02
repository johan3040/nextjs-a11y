'use client';

import Head from 'next/head';
import { Accordion as A } from '../components/accordion/basic/Accordion';
import { Accordion as B } from '../components/accordion/a11y/Accordion';

import '../styles/global.css';

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <A />
      <B />
    </div>
  );
}
