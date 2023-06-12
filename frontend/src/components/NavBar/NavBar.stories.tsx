import React from 'react';
import {ComponentMeta, StoryObj} from '@storybook/react';
import NavBar from "./NavBar";
import styled from "styled-components";

const Container = styled.div`
  background: violet;
  padding: 5px;
`

export default {
    title: 'Components/NavBar',
    component: NavBar,
    argTypes: {},
} as ComponentMeta<typeof NavBar>;

export const Basic: StoryObj<typeof NavBar> = {
    render: () => <Container>
        <NavBar/>
    </Container>,
};
