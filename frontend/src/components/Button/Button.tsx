import React from "react";
import { ButtonWrapper } from "./Button.styles";

type ButtonPropsType = {
    onClick: () => void
    title: string
}

const Button: React.FC<ButtonPropsType> = (props) => {
     
    return <ButtonWrapper onClick={props.onClick}>{props.title}</ButtonWrapper>
}

export default Button;
