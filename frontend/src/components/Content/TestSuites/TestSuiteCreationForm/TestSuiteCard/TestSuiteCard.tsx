import React from "react";
import { TestSuiteCardWrapper } from "./TestSuiteCard.styles";
import TestSuiteCardItem from "./TestSuiteCardItem.tsx/TestSuiteCardItem";

type TestSuiteCardPropsType = {
    id: string | number,
    title: string,
    description: string,
    count: number,
    date: string,    
}

const TestSuiteCard: React.FC<TestSuiteCardPropsType> = (props) => {
    const {id, title, description, count, date} = props

    return <TestSuiteCardWrapper>
        <TestSuiteCardItem  type={null}/>
        <TestSuiteCardItem value={id} type='id' />
        <TestSuiteCardItem value={title} type='title' />
        <TestSuiteCardItem value={description} type='description' />
        <TestSuiteCardItem value={count} type='count' />
        <TestSuiteCardItem value={date} type='date' />
    </TestSuiteCardWrapper>
}

export default TestSuiteCard;