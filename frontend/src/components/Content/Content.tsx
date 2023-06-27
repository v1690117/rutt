import React from "react";
import { ContentWrapper } from "./Content.styles";
import ActionBar from "./ActionBar/ActionBar";
import TestSuiteCreationForm from "./TestSuites/TestSuiteCreationForm/TestSuiteCreationForm";
import { Navigate, Route, Routes } from 'react-router-dom'


function Content() {
    return <ContentWrapper>
        Content is shown here. Type of content depends on options.
        
        <ActionBar />
        <TestSuiteCreationForm />
    </ContentWrapper>
}

export default Content;
