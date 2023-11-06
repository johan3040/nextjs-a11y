import React, { PropsWithChildren } from 'react';
import ReactHighlight from 'react-highlight';
import css from './highlighter.module.css';

export const Highlighter = ({
  title,
  children,
}: PropsWithChildren & { title: string }) => {
  return (
    <div className={css.highlighter}>
      <h3>{title}</h3>
      <ReactHighlight>{children}</ReactHighlight>
    </div>
  );
};
