import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Table} from './Table';
import styled from 'styled-components';

const Container = styled.div`
    background: violet;
`

export default {
    title: 'Example/Table',
    component: Table,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Table>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Table> = (args) => <Container><Table {...args} /></Container>;

export const Flat = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Flat.args = {
    data: [
        {
            id: '93e8901a-820f-4a0f-abe8-23ed1e50fa56',
            title: 'FE Development',
            owner: 'Mr FE Lead',
            state: 'Draft',
            namespace: 'Development Team'
        },
        {
            id: '4d331984-10c2-47ed-8f9b-a91e10adafb5',
            title: 'BE Development',
            owner: 'Mr BE Lead',
            state: 'Obsolete',
            namespace: 'Development Team'
        },
        {
            id: 'f56488c6-849a-4491-bbb8-ce5adc73f44b',
            title: 'Security',
            owner: 'Mr IT',
            state: 'Published',
            namespace: 'IT'
        },
        {
            id: '271897fa-ab52-4b62-b917-7d27fd405efb',
            title: 'End User Requirements',
            owner: 'Mr Analyst',
            state: 'Draft',
            namespace: 'Rutt Project'
        },
        {
            id: '588d818e-404f-42dc-8451-36a2a068bd87',
            title: 'Design',
            owner: 'Mr Designer',
            state: 'Draft',
            namespace: 'Rutt Project'
        },
    ],
    columns: [
        {
            title: 'ID',
            dataIndex: 'id'
        },
        {
            title: 'Title',
            dataIndex: 'title'
        },
        {
            title: 'Ownership',
            dataIndex: 'owner'
        },
        {
            title: 'State',
            dataIndex: 'state'
        },
        {
            title: 'Namespace',
            dataIndex: 'namespace'
        }
    ]
};
