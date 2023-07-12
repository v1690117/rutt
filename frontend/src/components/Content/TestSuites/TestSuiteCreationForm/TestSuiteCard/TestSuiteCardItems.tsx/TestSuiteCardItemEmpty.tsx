import React from "react";
import { TestSuiteCardItemEmptyWrapper } from "./TestSuiteCardItemEmpty.styles";
import { TestSuiteCardItemPropsType } from "../../../../../../types/types";

const TestSuiteCardItemEmpty: React.FC<TestSuiteCardItemPropsType> = (props) => {

    return <TestSuiteCardItemEmptyWrapper {...props}>
        {props.value}
    </TestSuiteCardItemEmptyWrapper>
}

export default TestSuiteCardItemEmpty;
