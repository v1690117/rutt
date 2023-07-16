import React from "react";
import { CreationFormFieldWrapper } from "./CreationFormField.styles";
import Input from "../../../../common/Input/Input";
import Textarea from "../../../../common/Textarea/Textarea";

type CreationFormFieldPropsType = {
    type?: 'title' | 'description', 
    onChange: (e: any) => void, 
    value: string
}

const CreationFormField: React.FC<CreationFormFieldPropsType> = (props) => {
    
    const formElement = props.type === 'title'
        ? <Input value={props.value} onChange={props.onChange} />
        : <Textarea value={props.value} onChange={props.onChange} />

    return <CreationFormFieldWrapper >
        <label>{props.type}</label>
        {formElement}
    </CreationFormFieldWrapper >
}

export default CreationFormField;
