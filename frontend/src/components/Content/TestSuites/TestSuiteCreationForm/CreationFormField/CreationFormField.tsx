import React from "react";
import { CreationFormFieldWrapper } from "./CreationFormField.styles";
import Input from "../../../../common/Input/Input";
import MarkdownEditor from "../../../../MarkdownEditor/MarkdownEditor";

type CreationFormFieldPropsType = {
    type?: 'title' | 'description',
    onChange: (e: any) => void,
    value: string
}

const CreationFormField: React.FC<CreationFormFieldPropsType> = (props) => {

    const formElement = props.type === 'title'
        ? <Input value={props.value} onChange={props.onChange} />
        : <MarkdownEditor value={props.value} onChange={props.onChange} />

    return <CreationFormFieldWrapper >
        <label>{props.type}</label>
        {formElement}
    </CreationFormFieldWrapper >
}

export default CreationFormField;
