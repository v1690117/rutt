import React, { useState } from 'react';
import { MarkdownEditorWrapper } from './MarkdownEditor.styles';
import MarkdownEditorControl from './MarkdownEditorControl/MarkdownEditorControl';
import MarkdownInput from './MarkdownInput/MarkdownInput';
import MarkdownPreview from './MarkdownPreview/MarkdownPreview';
import { FormFieldPropsType } from '../../types/types';

const MarkdownEditor: React.FC<FormFieldPropsType> = (props) => {
    // const [value, setValue] = useState('')
    const [active, setActive] = useState<{ [k: string]: boolean }>({
        write: true,
        preview: false
    })

    const handleClick = (e: { target: any }): void => {
        if (!active[e.target.title]) {
            const newActiveState = Object.fromEntries(
                Object.entries(active).map(([key, value]) => [key, !value])
            )
            setActive(newActiveState)
        }
    }

    // const handleChange = (e: { currentTarget: { value: React.SetStateAction<string> } }) => {
    //     setValue(e.currentTarget.value)
    // }

    return <MarkdownEditorWrapper>
        <MarkdownEditorControl onClick={handleClick} active={active} />
        {active.write && <MarkdownInput value={props.value} onChange={props.onChange} />}
        {active.preview && <MarkdownPreview value={props.value} />}
    </MarkdownEditorWrapper>
}

export default MarkdownEditor;
