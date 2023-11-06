import React from 'react';
import { Card } from '../card';
import { BasicForm } from './basic/Form';
import { A11yForm } from './a11y/Form';

export const FormWrapper = () => {
  return <Card>
    <h2>Form</h2>
  {/*   <BasicForm /> */}
    <A11yForm />
  </Card>
}