import React from "react";
import { TestSuiteCardItemCountWrapper } from "./TestSuiteCardItemCount.styles";
import { TestSuiteCardItemPropsType } from "../../../../../../types/types";

const TestSuiteCardItemCount: React.FC<TestSuiteCardItemPropsType> = (props) => {

    return <TestSuiteCardItemCountWrapper {...props}>
        {props.value}
    </TestSuiteCardItemCountWrapper>
}

export default TestSuiteCardItemCount;
