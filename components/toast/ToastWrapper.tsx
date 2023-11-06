import React from 'react';
import { Card } from '../card';
import { Flex } from '../flex';
import { BasicToast } from './basic';
import { A11yToast } from './a11y';

export const ToastWrapper = () => {
  return <Card>
    <Flex direction='column' gap="1rem">
      <h2>Toast</h2>
      <BasicToast />
      <A11yToast />
    </Flex>
  </Card>
}