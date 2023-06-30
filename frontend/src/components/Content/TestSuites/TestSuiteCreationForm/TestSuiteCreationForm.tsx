import React from "react";
import { TestSuiteCreationFormWrapper } from "./TestSuiteCreationForm.styles";
import CreationFormField from "./CreationFormField/CreationFormField";
import FormControl from "./FormControl/FormControl";

function TestSuiteCreationForm() {
    const handleFormSubmit = () => {
        console.log('Form submitted')
    }
    const handleFormCancel = () => {
        console.log('Form canceled!')
    }

    return <TestSuiteCreationFormWrapper>
        <CreationFormField type='title' />
        <CreationFormField type='description' />
        <FormControl {...{ handleFormSubmit, handleFormCancel }} />
    </TestSuiteCreationFormWrapper>
}

export default TestSuiteCreationForm;
