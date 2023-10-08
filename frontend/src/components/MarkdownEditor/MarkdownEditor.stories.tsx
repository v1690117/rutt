import React from 'react';
import { ComponentMeta, StoryObj } from '@storybook/react';
import MarkdownEditor from "./MarkdownEditor";
import styled, { ThemeProvider } from "styled-components";
import { theme } from '../../themes/themes';
import GlobalStyle from '../common/GlobalStyle/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';

const Container = styled.div`
  width: 1450px;
  border: 2px solid violet;
  padding: 5px;
  display: flex;
  flex-direction: row;
  gap: 16px;
`

export default {
    title: 'Components/MarkdownEditor',
    component: MarkdownEditor,
    argTypes: {},
} as ComponentMeta<typeof MarkdownEditor>;

export const Basic: StoryObj<typeof MarkdownEditor> = {
    render: () =>
        <BrowserRouter>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Container>
                    <MarkdownEditor value='# markdownEditor' onChange={() => console.log('field changed')} />
                </Container>
            </ThemeProvider>
        </BrowserRouter>,
};