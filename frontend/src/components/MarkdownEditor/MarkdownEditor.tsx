import React, { useState } from 'react';
import { MarkdownEditorWrapper } from './MarkdownEditor.styles';
import MarkdownEditorControl from './MarkdownEditorControl/MarkdownEditorControl';
import MarkdownInput from './MarkdownInput/MarkdownInput';
import MarkdownPreview from './MarkdownPreview/MarkdownPreview';
import { FormFieldPropsType } from '../../types/types';

const MarkdownEditor: React.FC<FormFieldPropsType> = (props) => {
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

    return <MarkdownEditorWrapper>
        <MarkdownEditorControl onClick={handleClick} active={active} />
        {active.write && <MarkdownInput value={props.value} onChange={props.onChange} />}
        {active.preview && <MarkdownPreview value={props.value} />}

    </MarkdownEditorWrapper>
}

export default MarkdownEditor;
