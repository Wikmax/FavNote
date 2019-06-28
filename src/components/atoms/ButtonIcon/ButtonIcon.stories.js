import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import plusIcon from 'assets/icons/plus.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import ButtonIcon from './ButtonIcon';

const YellowBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background-color: ${({ theme }) => theme.note};
`;

storiesOf('ButtonIcon', module)
  .addDecorator(story => <YellowBackground>{story()}</YellowBackground>)
  .add('BulbIcon', () => <ButtonIcon icon={bulbIcon} />)
  .add('BulbIconActive', () => <ButtonIcon active icon={bulbIcon} />)
  .add('LogoutIcon', () => <ButtonIcon icon={logoutIcon} />)
  .add('PenIcon', () => <ButtonIcon icon={penIcon} />)
  .add('PlusIcon', () => <ButtonIcon icon={plusIcon} />)
  .add('TwitterIcon', () => <ButtonIcon icon={twitterIcon} />);
