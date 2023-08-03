import React from 'react';
import { ComponentMeta, StoryObj } from '@storybook/react';
import CreationFormField from "./CreationFormField";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from '../../../../common/GlobalStyle/GlobalStyle';
import { theme } from '../../../../../themes/themes';

const Container = styled.div`
border: 1px solid violet;
padding: 5px;
display: flex;
flex-direction: column;
`;

export default {
    title: 'Components/CreationFormField',
    component: CreationFormField,
    argTypes: {},
} as ComponentMeta<typeof CreationFormField>;

export const Basic: StoryObj<typeof CreationFormField> = {
    render: () =>
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Container>
                    <CreationFormField type='title' onChange={() => console.log('Form field changed')} value=''/>
                    <CreationFormField type='description' onChange={() => console.log('Form field canceled')} value=''/>
                </Container>
            </ThemeProvider>
        </>,
};
