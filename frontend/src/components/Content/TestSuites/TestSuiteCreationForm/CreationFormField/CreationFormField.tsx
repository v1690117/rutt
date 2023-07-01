import React, { useState } from "react";
import { CreationFormFieldWrapper } from "./CreationFormField.styles";
import Input from "../../../../common/Input/Input";
import Textarea from "../../../../common/Textarea/Textarea";

type CreationFormFieldPropsType = {
    type?: 'title' | 'description'
}

const CreationFormField: React.FC<CreationFormFieldPropsType> = (props) => {
    const [value, setValue] = useState('')

    const handleChange = (e: any) => {
        setValue(e.target.value)
    }

    const formElement = props.type === 'title'
        ? <Input value={value} onChange={handleChange} />
        : <Textarea value={value} onChange={handleChange} />

    return <CreationFormFieldWrapper >
        <label>{props.type}</label>
        {formElement}
    </CreationFormFieldWrapper >
}

export default CreationFormField;
