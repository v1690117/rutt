import React from "react";
import { TestSuiteCardItemTitleWrapper } from "./TestSuiteCardItemTitle.styles";
import { TestSuiteCardItemPropsType } from "../../../../../types/types";

const TestSuiteCardItemTitle: React.FC<TestSuiteCardItemPropsType> = (props) => {

    return <TestSuiteCardItemTitleWrapper {...props}>
        {props.value}
    </TestSuiteCardItemTitleWrapper>
}

export default TestSuiteCardItemTitle;
