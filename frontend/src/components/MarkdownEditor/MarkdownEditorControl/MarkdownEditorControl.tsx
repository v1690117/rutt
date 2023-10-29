import React from 'react';
import { MarkdownEditorControlWrapper } from './MarkdownEditorControl.styles';
import ControlButton from './ControlButton/ControlButton';

type MarkdownEditorControlPropsType = {
    onClick: (e: { target: any }) => void
    active: { [k: string]: boolean } 
}

const MarkdownEditorControl: React.FC<MarkdownEditorControlPropsType> = (props) => {
    
    return (
        <MarkdownEditorControlWrapper >
            <ControlButton title='write' onClick={props.onClick} isActive={props.active.write} />
            <ControlButton title='preview' onClick={props.onClick} isActive={props.active.preview} />
        </MarkdownEditorControlWrapper>
    )
}

export default MarkdownEditorControl;
