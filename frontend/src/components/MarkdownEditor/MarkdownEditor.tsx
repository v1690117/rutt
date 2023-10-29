import React, {useRef, useState} from 'react';
import {MarkdownEditorWrapper} from './MarkdownEditor.styles';
import MarkdownEditorControl from './MarkdownEditorControl/MarkdownEditorControl';
import MarkdownInput from './MarkdownInput/MarkdownInput';
import MarkdownPreview from './MarkdownPreview/MarkdownPreview';
import {FormFieldPropsType} from '../../types/types';
import DragFile from './DragFile/DragFile';
import FilesService from '../../services/FiilesService';
import {useFileStore} from '../../stores/fileStore';

const MarkdownEditor: React.FC<FormFieldPropsType> = (props) => {
    const [drag, setDrag] = useState(false)
    const [active, setActive] = useState<{ [k: string]: boolean }>({
        write: true,
        preview: false
    })

    const setCurrentFile = useFileStore(state => state.setCurrentFile);

    const filesService = useRef<FilesService>(new FilesService());

    const handleClick = (e: { target: any }): void => {
        if (!active[e.target.title]) {
            const newActiveState = Object.fromEntries(
                Object.entries(active).map(([key, value]) => [key, !value])
            )
            setActive(newActiveState)
        }
    }

    const dragEnterHandle = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setDrag(true)
    }

    const getFileMarkdown = async (formData: any) => {
        const id = await filesService.current.upload(formData)
        const fileLink = await filesService.current.getContentUrl(id)
        return `![](${fileLink})`
    }

    const handleDropFile = async (formData: any) => {
        const fileLink = await getFileMarkdown(formData)
        setCurrentFile(fileLink)
        setDrag(false)
    }

    const handlePaste = async (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
        const item = (e.clipboardData || (e as any).originalEvent.clipboardData).items[0];
        if (item.type.indexOf('image') !== -1) {
            const file = item.getAsFile();
            if (file) {
                const formData = new FormData()
                formData.append('file', file)
                const fileLink = await getFileMarkdown(formData)
                setCurrentFile(fileLink)
            }
        }
    };

    return <MarkdownEditorWrapper onDragEnter={dragEnterHandle}>
        <MarkdownEditorControl onClick={handleClick} active={active} />
        {active.write && <MarkdownInput
            value={props.value}
            onChange={props.onChange}
            onPaste={handlePaste} />}
        {active.preview && <MarkdownPreview value={props.value} />}
        {drag && <DragFile dropFileHandle={handleDropFile} drag={drag} />}
    </MarkdownEditorWrapper>
}

export default MarkdownEditor;
