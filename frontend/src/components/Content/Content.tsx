import React from "react";
import { ContentWrapper } from "./Content.styles";
import ActionBar from "./ActionBar/ActionBar";
import TestSuiteCreationForm from "./TestSuites/TestSuiteCreationForm/TestSuiteCreationForm";

function Content() {

    return <ContentWrapper>
        <ActionBar />
        <TestSuiteCreationForm />
    </ContentWrapper>
}

export default Content;
