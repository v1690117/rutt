import React from 'react';
import ReactMarkdown from 'react-markdown';
import { MarkdownPreviewWrapper } from './MarkdownPreview.styles';

type MarkdownPreviewPropsType = {
    value: string
}

const MarkdownPreview: React.FC<MarkdownPreviewPropsType> = (props) => {
    return <MarkdownPreviewWrapper>
        <ReactMarkdown>
            {props.value}
        </ReactMarkdown>
    </MarkdownPreviewWrapper>
}

export default MarkdownPreview;
