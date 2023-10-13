import React, { useState } from "react";
import { DragFileWrapper } from "./DragFile.styles";

type DragFilePropsType = {
    dropFileHandle: (e: any) => void
    drag: boolean
}

const DragFile: React.FC<DragFilePropsType> = (props) => {
    const [drag, setDrag] = useState(props.drag)

    const dragEnterHandle = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setDrag(true)
    }

    const dragLeaveHandle = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setDrag(false)
    }

    const dragOverHandle = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    }

    const dropFileHandle = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        const file = Array.from(e.dataTransfer.files)[0]
        const formData = new FormData()
        formData.append('file', file)
        props.dropFileHandle(formData)
    }

    return (
        <DragFileWrapper
            onDragEnter={dragEnterHandle}
            onDragLeave={dragLeaveHandle}
            onDragOver={dragOverHandle}
            onDrop={dropFileHandle}
            {...props}
        >
            {drag && <div>drop file here</div>}
        </ DragFileWrapper>
    )
}

export default DragFile;
