import React from 'react';
import { ComponentMeta, StoryObj } from '@storybook/react';
import ActionBar from "./ActionBar";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from '../../common/GlobalStyle/GlobalStyle';
import { theme } from '../../../themes/themes';

const Container = styled.div`
border: 1px solid violet;
padding: 5px;
display: flex;
flex-direction: row;
gap: 16px;
`;

export default {
    title: 'Components/ActionBar',
    component: ActionBar,
    argTypes: {},
} as ComponentMeta<typeof ActionBar>;

export const Basic: StoryObj<typeof ActionBar> = {
    render: () =>
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Container>
                    <ActionBar />
                </Container>
            </ThemeProvider>
        </>,
};
