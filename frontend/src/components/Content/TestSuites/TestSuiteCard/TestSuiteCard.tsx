import React from "react";
import { TestSuiteCardWrapper } from "./TestSuiteCard.styles";
import TestSuiteCardItemEmpty from "./TestSuiteCardItems/TestSuiteCardItemEmpty";
import TestSuiteCardItemTitle from "./TestSuiteCardItems/TestSuiteCardItemTitle";
import TestSuiteCardItemId from "./TestSuiteCardItems/TestSuiteCardItemId";
import TestSuiteCardItemDescription from "./TestSuiteCardItems/TestSuiteCardItemDescription";
import TestSuiteCardItemCount from "./TestSuiteCardItems/TestSuiteCardItemCount";
import TestSuiteCardItemDate from "./TestSuiteCardItems/TestSuiteCardItemDate";

type TestSuiteCardPropsType = {
    id?: string | number,
    title: string,
    description: string,
    count: number,
    date: string
}

const TestSuiteCard: React.FC<TestSuiteCardPropsType> = (props) => {
    const { id, title, description, count, date } = props

    return <TestSuiteCardWrapper to={`/tests/${id}`}>
        <TestSuiteCardItemEmpty />
        <TestSuiteCardItemId value={id} />
        <TestSuiteCardItemTitle value={title} />
        <TestSuiteCardItemDescription value={description} />
        <TestSuiteCardItemCount value={count} />
        <TestSuiteCardItemDate value={date} />
    </TestSuiteCardWrapper>
}

export default TestSuiteCard;
