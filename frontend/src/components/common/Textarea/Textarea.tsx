import React from "react";
import { TextareaWrapper } from "./Textarea.styles";
import { FormFieldPropsType } from "../../../types/types";

const Textarea: React.FC<FormFieldPropsType> = (props) => {
    
    return <TextareaWrapper value={props.value} onChange={props.onChange} />
}

export default Textarea;
