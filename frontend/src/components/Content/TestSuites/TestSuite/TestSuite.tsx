import React, { useEffect, useRef } from "react";
import { TestSuiteWrapper } from "./TestSuite.styles";
import SuitesService from "../../../../services/SuitesService";
import { useParams } from "react-router-dom";
import { useSuiteStore } from "../../../../stores/suiteStore";
import shallow from 'zustand/shallow';

const TestSuite: React.FC = () => {
    const suiteService = useRef<SuitesService>(new SuitesService());
    const params = useParams();
    const { currentSuite,
        setCurrentSuite,
        removeCurrentSuite
    } = useSuiteStore(state => (state), shallow);

    useEffect(() => {
        params.id && suiteService.current
            .get(params.id.toString())
            .then(setCurrentSuite)
        return () => removeCurrentSuite()
    }, [params.id, setCurrentSuite, removeCurrentSuite]);

    return <TestSuiteWrapper>
        {currentSuite && <div>
            <div>{currentSuite.id}</div>
            <div>{currentSuite.title}</div>
            <div>{currentSuite.description}</div>
        </div>}
    </TestSuiteWrapper>
}

export default TestSuite;
