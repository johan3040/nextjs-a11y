import React from 'react';
import { accordionEntries } from '../../../utils/utils';
import { Item } from './Item';
import { Highlighter } from '../../highlighter';
import css from '../accordion.module.css';
import { Flex } from '../../flex';
import { Toggle } from '../../toggle';

export const Accordion = () => {
  return (
    <Flex direction="column" gap="1rem">
      <h3>Not accessible</h3>
      <div className={css.list}>
        {accordionEntries.map((entry) => (
          <Item key={entry.id} entry={entry} />
        ))}
      </div>
      <Toggle>
        <Flex gap="1rem" wrap='wrap'>
          <Highlighter title="Container">
            {`export const Accordion = () => {
  return (
    <Flex direction='column' gap="1rem">
      <h3>Not accessible</h3>
      <div className={css.list}>
        {accordionEntries.map((entry) => (
          <Item key={entry.id} entry={entry} />
        ))}
      </div>
    </Flex>
  );
};`}
          </Highlighter>
          <Highlighter title="Item">
            {`export const Item = ({ entry }: Props) => {
    const [open, setOpen] = useState(false);
    const id = useId();
  
    return (
      <div>
        <div
          className={css.button}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span>{entry.title}</span>
          <span className={open ? css.openIcon : ''}>^</span>
        </div>
        <div
          hidden={!open}
          className={classNames(css.panel, {
            [css.show]: open
          })}
        >
          <div>
            <p id={id} className={css.paragraph}>
              {entry.content}
            </p>
          </div>
        </div>
      </div>
    );
  };`}
          </Highlighter>
        </Flex>
      </Toggle>
    </Flex>
  );
};
