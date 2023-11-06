import React, { PropsWithChildren } from 'react';
import css from './card.module.css';

export const Card = ({ children }: PropsWithChildren) => {
  return <div className={css.card}>{children}</div>;
};
