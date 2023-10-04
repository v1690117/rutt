import React, { useState } from 'react';
import { MarkdownEditorWrapper } from './MarkdownEditor.styles';
import MarkdownEditorControl from './MarkdownEditorControl/MarkdownEditorControl';
import MarkdownInput from './MarkdownInput/MarkdownInput';
import MarkdownPreview from './MarkdownPreview/MarkdownPreview';

const MarkdownEditor: React.FC = (props: any) => {
    const [value, setValue] = useState('')
    const [active, setActive] = useState<{ [k: string]: boolean }>({
        write: true,
        preview: false
    })

    const handleClick = (e: { target: any }) : void => {
        if (!active[e.target.title]) {
            const newActiveState = Object.fromEntries(
                Object.entries(active).map(([key, value]) => [key, !value])
            )
            setActive(newActiveState)
        }
    }

    const handleChange = (e: { currentTarget: { value: React.SetStateAction<string> } }) => {
        setValue(e.currentTarget.value)
    }

    return <MarkdownEditorWrapper>
        <MarkdownEditorControl onClick={handleClick} active={active}/>
        {active.write && <MarkdownInput value={value} onChange={handleChange} />}
        {active.preview && <MarkdownPreview value={value} />}
    </MarkdownEditorWrapper>
}

export default MarkdownEditor;
