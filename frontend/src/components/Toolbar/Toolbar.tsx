import React from 'react'
import styled from 'styled-components';
import { Button } from '../Button/Button';

const ToolbarContainer = styled.ul`
list-style: none;
padding: 0;
display: flex
`
const ToolbarItem = styled.li`
margin-right: 2rem
`


export const Toolbar = ({ create, onCreateClick }: any) => {

    const onDeleteClick = () => {
        console.log('Delete button was clicked')
    }

    return (
        <ToolbarContainer>
            <ToolbarItem>
                <Button label='Create' onClick={onCreateClick}></Button>
            </ToolbarItem>
            <ToolbarItem>
                <Button label='Delete' onClick={onDeleteClick}></Button>
            </ToolbarItem>
        </ToolbarContainer>
    )
}

