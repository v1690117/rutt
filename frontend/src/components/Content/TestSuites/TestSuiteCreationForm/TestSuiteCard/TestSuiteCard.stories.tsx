import React from 'react';
import { ComponentMeta, StoryObj } from '@storybook/react';
import TestSuiteCard from "./TestSuiteCard";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from '../../../../common/GlobalStyle/GlobalStyle';
import { theme } from '../../../../../themes/themes';

const Container = styled.div`
border: 1px solid violet;
padding: 5px;
display: flex;
`;

const item = {
    id: 't345',
    title: 'Login page',
    description: 'Lorem ipsum dolor sit amet',
    count: 15,
    date: '11/11/2011 13:13:13',
}

export default {
    title: 'Components/TestSuiteCard',
    component: TestSuiteCard,
    argTypes: {},
} as ComponentMeta<typeof TestSuiteCard>;

export const Basic: StoryObj<typeof TestSuiteCard> = {
    render: () =>
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Container>
                    <TestSuiteCard {...item} />
                </Container>
            </ThemeProvider>
        </>,
};
