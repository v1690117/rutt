import React, { useEffect, useRef, useState } from "react";
import { TestSuitesWrapper } from "./TestSuites.styles";
import SuitesService from "../../../services/SuitesService";
import Suite from "../../../interfaces/suite";
import TestSuiteCard from "../TestSuites/TestSuiteCard/TestSuiteCard";

const TestSuites: React.FC = () => {
    const [suites, setSuites] = useState<Suite[]>([]);
    const suiteService = useRef<SuitesService>(new SuitesService());

    useEffect(() => {
        suiteService.current.getAll().then(setSuites)
    }, []);

    const tempSuitState = {
        count: 15,
        date: '11/11/2011 13:13:13'
    }

    return <TestSuitesWrapper>
        {suites.map(s => <TestSuiteCard
            {...s}
            count={tempSuitState.count}
            date={tempSuitState.date}
            key={s.id}
        />)}
    </TestSuitesWrapper>
}

export default TestSuites;
