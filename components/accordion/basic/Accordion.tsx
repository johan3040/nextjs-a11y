import React from 'react';
import { accordionEntries } from '../../../utils/utils';
import { Item } from './Item';

import css from '../accordion.module.css';

export const Accordion = () => {
  return (
    <div>
      <p>Basic</p>
      <ul className={css.list}>
        {accordionEntries.map((entry) => (
          <Item key={entry.id} entry={entry} />
        ))}
      </ul>
    </div>
  );
};
