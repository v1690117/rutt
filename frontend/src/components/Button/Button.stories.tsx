import React from 'react';
import { ComponentMeta, StoryObj } from '@storybook/react';
import Button from "./Button";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { theme } from '../../themes/themes';

const Container = styled.div`
  border: 2px solid violet;
  padding: 5px;
`
const Separator = styled.div`
  height: 2rem;    
`

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

export const Basic: StoryObj<typeof Button> = {
  render: () =>
    <ThemeProvider theme={theme}>
      <Container>
        <Button title='create' type='positive' onClick={() => console.log('clicked')} />
        <Separator />
        <Button title='cancel' type='negative' onClick={() => console.log('canceled')} />
      </Container>
    </ThemeProvider>,
};
