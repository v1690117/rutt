import React from 'react';
import { ToolbarButton, ToolbarButtonProps } from '../ToolbarButton/ToolbarButton';
import { ToolbarContainer } from './Toolbar.styles';

export interface ToolbarProps {
    buttons: ToolbarButtonProps[];
}

export const Toolbar: React.FC<ToolbarProps> = ({ buttons }) => {
    return (
        <ToolbarContainer>
            {buttons.map(item =>
                <ToolbarButton label={item.label} key={item.id} onClick={item.onClick}></ToolbarButton>
            )}
        </ToolbarContainer>
    )
}
