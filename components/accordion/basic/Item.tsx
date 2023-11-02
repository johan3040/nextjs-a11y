import React, { useId, useState } from 'react';
import { type Entry } from '../../../utils/utils';
import css from '../item.module.css';
import classNames from 'classnames';

type Props = {
  entry: Entry;
};

export const Item = ({ entry }: Props) => {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <li>
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
    </li>
  );
};
