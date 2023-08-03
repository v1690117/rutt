import React from 'react';
import { ComponentMeta, StoryObj } from '@storybook/react';
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from '../../common/GlobalStyle/GlobalStyle';
import { theme } from '../../../themes/themes';
import Breadcrumb from './Breadcrumb';

const Container = styled.div`
background: violet;
padding: 5px;
`;

export default {
    title: 'Components/Breadcrumb',
    component: Breadcrumb,
    argTypes: {},
} as ComponentMeta<typeof Breadcrumb>;

export const Basic: StoryObj<typeof Breadcrumb> = {
    render: () =>
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Container>
                    <Breadcrumb values={['t345', 'First']}/> 
                </Container>
            </ThemeProvider>
        </>,
};
