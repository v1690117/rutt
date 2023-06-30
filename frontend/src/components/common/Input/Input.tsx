import React from "react";
import { InputWrapper } from "./Input.styles";
import { FormFieldPropsType } from "../../../types/types";

const Input: React.FC<FormFieldPropsType> = (props) => {
    
    return <InputWrapper value={props.value} onChange={props.onChange} />
}

export default Input;
