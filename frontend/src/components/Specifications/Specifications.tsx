import React, { useState } from 'react';
import { Header } from '../Header/Header';
import { NewSpecPopup } from '../NewSpecPopup/NewSpecPopup';
import { Toolbar } from '../Toolbar/Toolbar';
import { SpecsContainer } from './Specifications.styles';
import { nanoid } from 'nanoid';

export const Specifications: React.FunctionComponent = (props: any) => {
    const [create, setCreate] = useState(false);
    const [value, setValue] = useState('');

    const onCreateClick = () => {
        if (create === false) setCreate(true)
    }

    const onDeleteClick = () => {
        console.log('Delete button was clicked')
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

    const specsToolbarButtons = [
        {
            label: 'Create',
            id: nanoid(),
            onClick: onCreateClick
        },
        {
            label: 'Delete',
            id: nanoid(),
            onClick: onDeleteClick
        },
    ]

    return (
        <SpecsContainer>
            <Header title='specifications' />
            <Toolbar buttons={specsToolbarButtons} />
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
