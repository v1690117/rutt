import React, { useState } from "react";
import { ContentWrapper } from "./Content.styles";
import ActionBar from "./ActionBar/ActionBar";
import TestSuiteCreationForm from "./TestSuites/TestSuiteCreationForm/TestSuiteCreationForm";
import { ContentItemStateType } from "../../types/types";
import { Route, Routes } from "react-router-dom";
import TestSuites from "./TestSuites/TestSuites";
import TestSuite from "./TestSuites/TestSuite/TestSuite";

const Content: React.FC = () => {
    const [activated, setActivated] = useState(false);

    const isActivated = (state: ContentItemStateType) => {
        const isActivatedValue = state.some((element: { isActive: boolean }) => element.isActive === true)
        setActivated(isActivatedValue)
    }

    return <ContentWrapper>
        <Routes>
            <Route path="/" element={<>
                <ActionBar isActivated={isActivated} />
                {activated && <TestSuiteCreationForm />}
            </>} />
            <Route path="/requirements" element={<div>REQUIREMENTS</div>} />
            <Route path="/cases" element={<div>USE CASES</div>} />
            <Route path="/tests/:id" element={<TestSuite />} />
            <Route path="/tests" element={<TestSuites />} />
            <Route path="*" element={<div>404 NOT FOUND</div>} />
        </Routes>
    </ContentWrapper>
}

export default Content;
