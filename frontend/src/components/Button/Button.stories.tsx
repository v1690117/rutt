import React from 'react';
import {ComponentMeta, StoryObj} from '@storybook/react';
import Button from "./Button";
import styled, {ThemeProvider} from "styled-components";
import {theme} from '../../themes/themes';

const Container = styled.div`
  border: 2px solid violet;
  padding: 5px;
  display: flex;
  flex-direction: row;
  gap: 16px;
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
                <Button title='create' type='positive' onClick={() => console.log('clicked')}/>
                <Button title='cancel' type='negative' onClick={() => console.log('canceled')}/>
            </Container>
        </ThemeProvider>,
};
