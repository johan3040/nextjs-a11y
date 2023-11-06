import React, { useCallback } from 'react';
import { Flex } from '../../flex';
import { Toast } from './Toast';
import css from '../toast.module.css';

export const BasicToast = () => {
  const [activeToasts, setActiveToasts] = React.useState<number[]>([]);

  const filterToasts = useCallback(
    (id: number) => {
      setActiveToasts((prev) => prev.filter((toastId) => toastId !== id));
    },
    [activeToasts]
  );

  return (
    <Flex direction="column" gap="1rem">
      <h3>Not accessible</h3>
      <div className={css.trigger} onClick={() => setActiveToasts((prev) => [...prev, Date.now()])}>
        Trigger toast
      </div>
      <div className={css.toastContainer}>
        {activeToasts.map((timestamp) => (
          <Toast key={timestamp} id={timestamp} callback={filterToasts} />
        ))}
      </div>
    </Flex>
  );
};
