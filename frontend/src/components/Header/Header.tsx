import React, { useState } from 'react'
import styled from 'styled-components';
import { NewSpecPopup } from '../NewSpecPopup/NewSpecPopup';
import { Toolbar } from '../Toolbar/Toolbar';

const HeaderContainer = styled.div`
position: relative;
width: 100%;
min-height: 10rem; 
background-color: #E4E0E9;
box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
padding-top: 2rem;
padding-left: 5rem;
`;

const HeaderTitle = styled.h1`
font-size: 2.5rem;
text-transform: capitalize;
`;

export const Header = (props: any) => {
    const [create, setCreate] = useState(false)
    const [value, setValue] = useState('')

    const onCreateClick = () => {
        if (create === false) setCreate(true)
    }

    const onSubmitClick = () => {
        console.log('spec with title', value, 'was created');
        setCreate(false)
    }

    const onCancelClick = () => {
        setCreate(false)
    }

    const onInputChange = (e: any) => {
        setValue(e.target.value)
    }

    return (
        <HeaderContainer>
            <HeaderTitle>
                specifications
            </HeaderTitle>
            <Toolbar create={create} onCreateClick={onCreateClick} />

            {create &&
                <NewSpecPopup
                    onInputChange={onInputChange}
                    onCancelClick={onCancelClick}
                    onSubmitClick={onSubmitClick}
                />
            }

        </HeaderContainer>
    )
}

