import React from 'react'
import styled from 'styled-components';
import {  Input } from 'antd';
import { Button } from '../Button/Button';

const PopupContainer = styled.div`
position: absolute;
z-index: 10;
top: 15rem;
left: 5rem;
width: 30rem; 
height: 15rem; 
padding: 0 2rem;
background-color: #FFA800;
border-radius: 0.5rem;
box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
`
const PopupTitle = styled.h2`
font-size: 2rem;
text-transform: capitalize;
text-align: center
`
const PopupButtonsWrapper = styled.div`
margin-top: 3rem;
display: flex;
justify-content: space-around;
padding: 0 2rem;
`
export const NewSpecPopup = ({ value, onSubmitClick, onCancelClick, onInputChange }: any) => {
    return (
        <PopupContainer>
            <PopupTitle>new specification</PopupTitle>
            <Input
                value={value}
                onChange={onInputChange}
                required
                type="text"
                placeholder='Title'
            />
            <PopupButtonsWrapper>
                <Button
                    label='Cancel'
                    onClick={onCancelClick}
                    backgroundColor='#E4E0E9'></Button>
                <Button
                    label='Create'
                    onClick={onSubmitClick}
                    primary ></Button>
            </PopupButtonsWrapper>
        </PopupContainer >
    )
}

