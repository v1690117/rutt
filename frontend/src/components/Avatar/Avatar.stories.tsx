import React from 'react';
import { ComponentMeta, StoryObj } from '@storybook/react';
import Avatar from './Avatar';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../themes/themes';
import GlobalStyle from '../common/GlobalStyle/GlobalStyle';

const Container = styled.div`
  border: 2px solid violet;
  padding: 5px;
  display: flex;
  flex-direction: row;
  gap: 16px;
`
const user = {
    name: 'Vla',
    lastName: 'Ves'
}

export default {
    title: 'Components/Avatar',
    component: Avatar,
    argTypes: {},
} as ComponentMeta<typeof Avatar>;

export const Basic: StoryObj<typeof Avatar> = {
    render: () =>
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Container>
                    <Avatar user={user} onClick={() => console.log(user)} />
                </Container>
            </ThemeProvider>
        </>,
};
