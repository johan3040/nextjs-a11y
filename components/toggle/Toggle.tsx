import React, { PropsWithChildren, useState } from 'react';
import { Flex } from '../flex';

export const Toggle = ({ children }: PropsWithChildren) => {
  const [open, setOpen] = useState(false);

  if (!open) {
    return <button onClick={() => setOpen(true)}>Show code</button>;
  }

  return (
    <Flex direction="column" gap="1rem">
      <button onClick={() => setOpen(false)}>Hide code</button>
      {children}
    </Flex>
  );
};
