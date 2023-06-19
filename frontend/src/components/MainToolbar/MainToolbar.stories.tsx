import React from 'react';
import { ComponentMeta, StoryObj } from '@storybook/react';
import MainToolbar from "./MainToolbar";
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
    title: 'Components/MainToolbar',
    component: MainToolbar,
    argTypes: {},
} as ComponentMeta<typeof MainToolbar>;

export const Basic: StoryObj<typeof MainToolbar> = {
    render: () =>
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Container>
                    <MainToolbar />
                </Container>
            </ThemeProvider>
        </>,
};