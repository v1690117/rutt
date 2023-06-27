import React from 'react';
import { ComponentMeta, StoryObj } from '@storybook/react';
import NavBarItem from "./NavBarItem";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from '../../common/GlobalStyle/GlobalStyle';
import { theme } from '../../../themes/themes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Container = styled.div`
background: violet;
padding: 5px;
`;

export default {
    title: 'Components/NavBarItem',
    component: NavBarItem,
    argTypes: {},
} as ComponentMeta<typeof NavBarItem>;

export const Basic: StoryObj<typeof NavBarItem> = {
    render: () =>
        <BrowserRouter>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Container>
                    <NavBarItem title='Requirements' to='/requirements' />
                    <Routes>
                        <Route path="/requirements" element={<div>Requirements</div>} />
                    </Routes>
                </Container>
            </ThemeProvider>
        </BrowserRouter>,
};
