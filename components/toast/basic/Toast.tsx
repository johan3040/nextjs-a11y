import React, { useEffect } from 'react';
import css from '../toast.module.css';
import { Flex } from '../../flex';

type Props = {
  id: number;
  callback: (id: number) => void;
};

export const Toast = ({ id, callback }: Props) => {
  useEffect(() => {
    setTimeout(() => {
      callback(id);
    }, 3000);
  }, [id]);

  return (
    <Flex direction="column" className={css.toast}>
      <div>
        <strong>ID: {id}</strong>
      </div>
      I'm a toast! 🍞
      {id % 2 === 0 && (
        <div>
          There might be a lot of information but i doubt you will have time to read everything because i will disappear in 3 seconds.
          And 3 seconds might be too short to read everything. Some people might need more time, and we should respect that. Otherwise we are not inclusive.
        </div>
      )}
    </Flex>
  );
};
