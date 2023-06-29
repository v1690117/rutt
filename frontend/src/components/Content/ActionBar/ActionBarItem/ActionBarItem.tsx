import React from 'react';
import { ActionBarItemWrapper } from './ActionBarItem.styles';
import AddButton from '../AddButton/AddButton';

type ActionBarItemPropsType = {
    title: string,
    onClick: (e: any) => void
    isActive: boolean
}

const ActionBarItem: React.FC<ActionBarItemPropsType> = (props) => {

    return <ActionBarItemWrapper {...props}>
        <AddButton />
        {props.title}
    </ActionBarItemWrapper>
}

export default ActionBarItem;
