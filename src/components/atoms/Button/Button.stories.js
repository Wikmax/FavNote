import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Button from './Button';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Primary', () => {
    const label = 'Colors';
    const options = {
      Primary: 'hsl(49,100%,58%)',
      Secondary: 'hsl(0,0%,90%)',
      Tertiary: 'hsl(106,47%,64%)',
    };
    const defaultValue = 'red';
    const groupId = 'GROUP=ID1';
    const value = select(label, options, defaultValue, groupId);
    return <Button color={value}> Hello Viktor </Button>;
  })
  .add('Secondary', () => <Button secondary> Hello Viktor </Button>);
