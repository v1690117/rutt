import React from 'react';
import { MarkdownInputWrapper } from './MarkdownInput.styles';


export type MarkdownInputPropsType = {
    onChange: (e: any) => void
    onPaste: (e: any) => void
    value: string
}

const MarkdownInput: React.FC<MarkdownInputPropsType> = (props) => {
    return <MarkdownInputWrapper
        onChange={props.onChange}
        onPaste={props.onPaste}
        value={props.value} />
}

export default MarkdownInput;
