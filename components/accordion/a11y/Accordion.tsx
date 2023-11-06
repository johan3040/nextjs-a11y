import React from 'react';
import { accordionEntries } from '../../../utils/utils';
import { Item } from './Item';

import css from '../accordion.module.css';
import { Flex } from '../../flex';
import { Highlighter } from '../../highlighter';
import { Toggle } from '../../toggle';

export const Accordion = () => {
  return (
    <Flex direction="column" gap="1rem">
      <h3>Accessible</h3>
      <ul className={css.list}>
        {accordionEntries.map((entry) => (
          <Item key={entry.id} entry={entry} />
        ))}
      </ul>
      <Toggle>
      <Flex gap="1rem" wrap='wrap'>
        <Highlighter title="Container">
          {`export const Accordion = () => {
  return (
    <Flex direction="column" gap="1rem">
      <h3>Accessible</h3>
      <ul className={css.list}>
        {accordionEntries.map((entry) => (
          <Item key={entry.id} entry={entry} />
        ))}
      </ul>
    </Flex>
  );
};`}
        </Highlighter>
        <Highlighter title="Item">
          {`export const Item = ({ entry }: Props) => {
  const [open, setOpen] = useState(false);
  const id = useId();
  const headerId = useId();

  return (
    <li>
      <div role="heading" aria-level={2}>
        <button
          type="button"
          id={headerId}
          aria-controls={id}
          aria-expanded={open}
          className={css.button}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span>{entry.title}</span>
          <span className={open ? css.openIcon : ''}>^</span>
        </button>
      </div>
      <div
        role="region"
        aria-labelledby={headerId}
        hidden={!open}
        className={classNames(css.panel, {
          [css.show]: open
        })}
      >
        <div>
          <p id={id} className={css.paragraph}>{entry.content}</p>
        </div>
      </div>
    </li>
  );
};`}
        </Highlighter>
      </Flex>
      </Toggle>
    </Flex>
  );
};


