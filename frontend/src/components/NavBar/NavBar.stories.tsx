import React from 'react';
import { ComponentMeta, StoryObj } from '@storybook/react';
import NavBar from "./NavBar";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from '../common/GlobalStyle/GlobalStyle';
import { theme } from '../../themes/themes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Container = styled.div`
  width: 1450px;
  background: violet;
  padding: 5px;
`

export default {
    title: 'Components/NavBar',
    component: NavBar,
    argTypes: {},
} as ComponentMeta<typeof NavBar>;

export const Basic: StoryObj<typeof NavBar> = {
    render: () =>
        <BrowserRouter>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Container>
                    <NavBar />
                    <Routes>
                        <Route path="/requirements" element={<div>Requirements</div>} />
                        <Route path="/cases" element={<div>Use Cases</div>} />
                        <Route path="/tests" element={<div>Test Suits</div>} />
                        <Route path="*" element={<div>404 NOT FOUND</div>} />
                    </Routes>
                </Container>
            </ThemeProvider>
        </BrowserRouter>,
};
