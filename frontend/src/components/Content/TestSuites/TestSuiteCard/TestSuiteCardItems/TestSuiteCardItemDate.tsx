import React from "react";
import { TestSuiteCardItemDateWrapper } from "./TestSuiteCardItemDate.styles";
import { TestSuiteCardItemPropsType } from "../../../../../types/types";

const TestSuiteCardItemDate: React.FC<TestSuiteCardItemPropsType> = (props) => {

    return <TestSuiteCardItemDateWrapper {...props}>
        {props.value}
    </TestSuiteCardItemDateWrapper>
}

export default TestSuiteCardItemDate;
