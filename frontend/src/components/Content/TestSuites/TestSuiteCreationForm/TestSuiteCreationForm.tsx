import React, { useRef, useState } from "react";
import { TestSuiteCreationFormWrapper } from "./TestSuiteCreationForm.styles";
import CreationFormField from "./CreationFormField/CreationFormField";
import FormControl from "./FormControl/FormControl";
import SuitesService from "../../../../services/SuitesService";

function TestSuiteCreationForm() {
    const [formFieldValues, setFormFieldValues] = useState({ title: '', description: '' })
    const [error, setError] = useState(null)

    const suiteService = useRef<SuitesService>(new SuitesService());

    const clearFormFields = () => {
        setFormFieldValues({ title: '', description: '' })
    }

    const handleTitleFormFieldChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFormFieldValues({ ...formFieldValues, title: e.target.value })
    }

    const handleDescriptionFormFieldChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFormFieldValues({ ...formFieldValues, description: e.target.value })
    }

    const handleFormSubmit = async () => {
        const response = await suiteService.current.create({ ...formFieldValues, state: 'draft' })
        const responseData = JSON.parse(response)
        if (responseData.status) {
            setError(responseData.error)
        } else {
            clearFormFields()
            setError(null)
        }
    }

    const handleFormCancel = () => {
        clearFormFields()
    }

    return <TestSuiteCreationFormWrapper>
        {error && <div>{error}</div>}
        <CreationFormField type='title'
            onChange={handleTitleFormFieldChange}
            value={formFieldValues.title} />
        <CreationFormField type='description'
            onChange={handleDescriptionFormFieldChange}
            value={formFieldValues.description} />
        <FormControl {...{ handleFormSubmit, handleFormCancel }} />
    </TestSuiteCreationFormWrapper>
}

export default TestSuiteCreationForm;
