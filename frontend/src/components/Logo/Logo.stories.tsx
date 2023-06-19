import React from 'react';
import { ComponentMeta, StoryObj } from '@storybook/react';
import Logo from "./Logo";
import styled, { ThemeProvider } from "styled-components";
import { theme } from '../../themes/themes';
import GlobalStyle from '../common/GlobalStyle/GlobalStyle';

const Container = styled.div`
  border: 2px solid violet;
  padding: 5px;
  display: flex;
  flex-direction: row;
  gap: 16px;
`

export default {
    title: 'Components/Logo',
    component: Logo,
    argTypes: {},
} as ComponentMeta<typeof Logo>;

export const Basic: StoryObj<typeof Logo> = {
    render: () =>
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Container>
                    <Logo />
                </Container>
            </ThemeProvider>
        </>,
};