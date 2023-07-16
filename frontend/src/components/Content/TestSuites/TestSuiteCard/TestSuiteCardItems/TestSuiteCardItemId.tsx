import React from "react";
import { TestSuiteCardItemIdWrapper } from "./TestSuiteCardItemId.styles";
import { TestSuiteCardItemPropsType } from "../../../../../types/types";

const TestSuiteCardItemId: React.FC<TestSuiteCardItemPropsType> = (props) => {

    return <TestSuiteCardItemIdWrapper {...props}>
        {props.value}
    </TestSuiteCardItemIdWrapper>
}

export default TestSuiteCardItemId;
