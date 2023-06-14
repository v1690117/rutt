import React from 'react';
import { ComponentMeta, StoryObj } from '@storybook/react';
import Button from "./Button";
import styled from "styled-components";

const Container = styled.div`
  border: 2px solid violet;
  padding: 5px;
`

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {},
} as ComponentMeta<typeof Button>;

export const Basic: StoryObj<typeof Button> = {
    render: () => <Container>
        <Button title='create' onClick={() => console.log('clicked')} />
    </Container>,
};
