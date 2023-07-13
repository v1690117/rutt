import React, { useEffect, useRef, useState } from "react";
import { TestSuiteWrapper } from "./TestSuite.styles";
import SuitesService from "../../../../services/SuitesService";
import Suite from "../../../../interfaces/suite";
import { useParams } from "react-router-dom";

const TestSuite: React.FC = () => {
    const [suite, setSuite] = useState<Suite | null>(null);
    const suiteService = useRef<SuitesService>(new SuitesService());
    const params = useParams();

    useEffect(() => {
        params.id && suiteService.current
            .get(params.id.toString())
            .then(setSuite)
    }, [params]);

    return <TestSuiteWrapper>
        {suite && <div>
            <div>{suite.id}</div>
            <div>{suite.title}</div>
            <div>{suite.description}</div>
        </div>}
    </TestSuiteWrapper>
}

export default TestSuite;
