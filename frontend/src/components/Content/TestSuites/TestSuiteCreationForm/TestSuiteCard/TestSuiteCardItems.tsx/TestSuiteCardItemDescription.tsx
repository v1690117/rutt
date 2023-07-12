import React from "react";
import { TestSuiteCardItemDescriptionWrapper } from "./TestSuiteCardItemDescription.styles";
import { TestSuiteCardItemPropsType } from "../../../../../../types/types";

const TestSuiteCardItemDescription: React.FC<TestSuiteCardItemPropsType> = (props) => {

    return <TestSuiteCardItemDescriptionWrapper {...props}>
        {props.value}
    </TestSuiteCardItemDescriptionWrapper>
}

export default TestSuiteCardItemDescription;
