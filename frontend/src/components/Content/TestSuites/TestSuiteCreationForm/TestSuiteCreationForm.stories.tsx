import React from 'react';
import { ComponentMeta, StoryObj } from '@storybook/react';
import TestSuiteCreationForm from "./TestSuiteCreationForm";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from '../../../common/GlobalStyle/GlobalStyle';
import { theme } from '../../../../themes/themes';

const Container = styled.div`
border: 1px solid violet;
padding: 5px;
display: flex;
`;

export default {
    title: 'Components/TestSuiteCreationForm',
    component: TestSuiteCreationForm,
    argTypes: {},
} as ComponentMeta<typeof TestSuiteCreationForm>;

export const Basic: StoryObj<typeof TestSuiteCreationForm> = {
    render: () =>
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Container>
                    <TestSuiteCreationForm />
                </Container>
            </ThemeProvider>
        </>,
};
