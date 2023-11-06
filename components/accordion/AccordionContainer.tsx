import React from 'react';
import { Accordion as BasicAccordion } from './basic/Accordion';
import { Accordion as AccessibleAccordion } from './a11y/Accordion';
import { Card } from '../card';
import { Flex } from '../flex';

export const AccordionContainer = () => {
  return (
    <Card>
      <Flex direction='column' gap="1rem">
      <h2>Accordion</h2>
      <BasicAccordion />
      <AccessibleAccordion />
      </Flex>
    </Card>
  );
};
