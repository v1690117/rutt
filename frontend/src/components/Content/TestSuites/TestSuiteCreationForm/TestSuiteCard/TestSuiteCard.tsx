import React from "react";
import { TestSuiteCardWrapper } from "./TestSuiteCard.styles";
import TestSuiteCardItemEmpty from "./TestSuiteCardItems.tsx/TestSuiteCardItemEmpty";
import TestSuiteCardItemTitle from "./TestSuiteCardItems.tsx/TestSuiteCardItemTitle";
import TestSuiteCardItemId from "./TestSuiteCardItems.tsx/TestSuiteCardItemId";
import TestSuiteCardItemDescription from "./TestSuiteCardItems.tsx/TestSuiteCardItemDescription";
import TestSuiteCardItemCount from "./TestSuiteCardItems.tsx/TestSuiteCardItemCount";
import TestSuiteCardItemDate from "./TestSuiteCardItems.tsx/TestSuiteCardItemDate";

type TestSuiteCardPropsType = {
    id?: string | number,
    title: string,
    description: string,
    count: number,
    date: string,
}

const TestSuiteCard: React.FC<TestSuiteCardPropsType> = (props) => {
    const { id, title, description, count, date } = props

    return <TestSuiteCardWrapper>
        <TestSuiteCardItemEmpty />
        <TestSuiteCardItemId value={id} />
        <TestSuiteCardItemTitle value={title} />
        <TestSuiteCardItemDescription value={description} />
        <TestSuiteCardItemCount value={count} />
        <TestSuiteCardItemDate value={date} />
    </TestSuiteCardWrapper>
}

export default TestSuiteCard;
