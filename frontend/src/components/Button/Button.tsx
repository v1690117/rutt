import React from "react";
import { ButtonWrapper } from "./Button.styles";
import { ButtonPropsType } from "../../types/types";

const Button: React.FC<ButtonPropsType> = (props) => {
    
    return <ButtonWrapper type={props.type} onClick={props.onClick}>{props.title}</ButtonWrapper>
}

export default Button;
