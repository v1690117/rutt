import React, { useEffect, useRef, useState } from "react";
import { TestSuiteCreationFormWrapper } from "./TestSuiteCreationForm.styles";
import CreationFormField from "./CreationFormField/CreationFormField";
import FormControl from "./FormControl/FormControl";
import SuitesService from "../../../../services/SuitesService";
import Suite from "../../../../interfaces/suite";


function TestSuiteCreationForm() {    
    // the code duplicates the Content.tsx, a temporary solution for assigning an ID 
    const [suites, setSuites] = useState<Suite[]>([]);
    
    useEffect(() => {
        suiteService.current.getAll().then(setSuites)
    }, []);
    
    const suiteService = useRef<SuitesService>(new SuitesService());

    const initialFieldValues = {
        title: '',
        description: ''
    }

    const [formFieldValues, setFormFieldValues] = useState(initialFieldValues)

    const handleFormFieldChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (e.target.outerHTML.includes('input')) {
            setFormFieldValues({...formFieldValues, title: e.target.value})
        }
        if (e.target.outerHTML.includes('textarea')) {
            setFormFieldValues({...formFieldValues, description: e.target.value})
        }
    }

    const clearFormFields = () => {
        setFormFieldValues(initialFieldValues)
    }
    
    const handleFormSubmit = () => {              
        let lastId = [...suites].pop()?.id 
        let newId = lastId ? lastId + 1 : 1; 
        const newSuite: Suite = { 
            id: newId,
            title: formFieldValues.title,  
            description: formFieldValues.description,
            state: 'draft' 
        } 
        suiteService.current.create(newSuite)
        clearFormFields()
    }
    
    const handleFormCancel = () => {
        clearFormFields()
    }

    return <TestSuiteCreationFormWrapper>
        <CreationFormField type='title' onChange={handleFormFieldChange} value={formFieldValues.title}/>
        <CreationFormField type='description' onChange={handleFormFieldChange} value={formFieldValues.description}/>
        <FormControl {...{ handleFormSubmit, handleFormCancel }} />
    </TestSuiteCreationFormWrapper>
}

export default TestSuiteCreationForm;
