import React from 'react';
import { ControlButtonWrapper } from './ControlButton.styles';
import { ControlButtonPropsType } from '../../../../types/types';

// type ControlButtonPropsType = {
//     onClick: () => void
//     title: string
//     isActive: boolean
// }

const ControlButton: React.FC<ControlButtonPropsType> = (props) => {

    return (
        <ControlButtonWrapper {...props}>
            {props.title}
        </ControlButtonWrapper>
    )
}

export default ControlButton;