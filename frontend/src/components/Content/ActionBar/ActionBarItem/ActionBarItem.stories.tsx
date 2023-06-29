import React from 'react';
import { ComponentMeta, StoryObj } from '@storybook/react';
import ActionBarItem from "./ActionBarItem";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from '../../../common/GlobalStyle/GlobalStyle';
import { theme } from '../../../../themes/themes';

const Container = styled.div`
border: 1px solid violet;
padding: 5px;
display: flex;
flex-direction: row;
gap: 16px;
`;

export default {
    title: 'Components/ActionBarItem',
    component: ActionBarItem,
    argTypes: {},
} as ComponentMeta<typeof ActionBarItem>;

export const Basic: StoryObj<typeof ActionBarItem> = {
    render: () =>
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Container>
                    <ActionBarItem 
                    title='New Test Suite' 
                    isActive={true}
                    onClick={()=> console.log('clicked')}/>                    
                </Container>
            </ThemeProvider>
        </>,
};
