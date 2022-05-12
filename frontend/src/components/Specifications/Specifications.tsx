import React, { useState } from 'react'
import styled from 'styled-components';
import { Header } from '../Header/Header';
import { NewSpecPopup } from '../NewSpecPopup/NewSpecPopup';
import { Toolbar } from '../Toolbar/Toolbar';
import { SpecsContainer } from './Specifications.styles';

export const Specifications = (props: any) => {
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
        <SpecsContainer>

            <Header title='specifications' /> 
                
            <Toolbar create={create} onCreateClick={onCreateClick} />

            {create &&
                <NewSpecPopup
                    onInputChange={onInputChange}
                    onCancelClick={onCancelClick}
                    onSubmitClick={onSubmitClick}
                />
            }

        </SpecsContainer>
    )
}

