import React, { useCallback } from 'react';
import { Flex } from '../../flex';
import { Toast } from './Toast';
import css from '../toast.module.css';

export const A11yToast = () => {
  const [activeToasts, setActiveToasts] = React.useState<number[]>([]);

  const filterToasts = useCallback(
    (id: number) => {
      setActiveToasts((prev) => prev.filter((toastId) => toastId !== id));
    },
    [activeToasts]
  );

  return (
    <Flex direction="column" gap="1rem">
      <h3>Accessible</h3>
      <button
        className={css.trigger}
        onClick={() => setActiveToasts((prev) => [...prev, Date.now()])}
      >
        Trigger toast
      </button>
      <div className={css.toastContainer}>
        {activeToasts.map((timestamp) => (
          <Toast key={timestamp} id={timestamp} callback={filterToasts} />
        ))}
      </div>
    </Flex>
  );
};
