import React, { useEffect } from 'react';
import css from '../toast.module.css';
import { Flex } from '../../flex';

type Props = {
  id: number;
  callback: (id: number) => void;
};

export const Toast = ({ id, callback }: Props) => {
  /* useEffect(() => {
    setTimeout(() => {
      callback(id);
    }, 15000);
  }, [id]); */

  return (
    <div role="alert">
      <Flex direction="column" className={css.toast} gap="0.5rem">
        <header>
          <Flex alignItems="center" justifyContent="space-between">
            <h5>ID: {id}</h5>
            <button onClick={() => callback(id)} aria-label="Close">❌</button>
          </Flex>
        </header>
        <p>
          
          I am a toast! 🍞
          {id % 2 === 0 && (
            <span>
              There might be a lot of information but i doubt you will have time
              to read everything because i will disappear in 3 seconds. And 3
              seconds might be too short to read everything. Some people might
              need more time, and we should respect that. Otherwise we are not
              inclusive.
            </span>
          )}
        </p>
      </Flex>
    </div>
  );
};
