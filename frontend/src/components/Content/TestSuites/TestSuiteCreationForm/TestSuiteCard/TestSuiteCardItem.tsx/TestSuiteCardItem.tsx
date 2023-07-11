import React from "react";
import { TestSuiteCardItemWrapper } from "./TestSuiteCardItem.styles";

type TestSuiteCardItemPropsType = {
    value?: string | number, 
    type: 'id' | 'title' | 'description' | 'count' | 'date' | null 
}

const TestSuiteCardItem: React.FC<TestSuiteCardItemPropsType> = (props) => {
    
    return <TestSuiteCardItemWrapper {...props}>
        {props.value}
    </TestSuiteCardItemWrapper>
}

export default TestSuiteCardItem;