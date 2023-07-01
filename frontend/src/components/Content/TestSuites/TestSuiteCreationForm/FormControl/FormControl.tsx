import React from "react";
import { FormControlWrapper } from "./FormControl.styles";
import Button from "../../../../Button/Button";

const FormControl = (props: any) => {

    return <FormControlWrapper >
        <Button title={'Create'} type='positive' onClick={props.handleFormSubmit} />
        <Button title={'Cancel'} type='negative' onClick={props.handleFormCancel} />
    </FormControlWrapper >
}

export default FormControl;