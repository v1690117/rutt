import React, { useEffect, useRef, useState } from "react";
import { TestSuiteWrapper } from "./TestSuite.styles";
import SuitesService from "../../../../services/SuitesService";
import { useParams } from "react-router-dom";
import { useSuiteStore } from "../../../../stores/suiteStore";
import shallow from 'zustand/shallow';
import Preloader from "../../../common/Preloader/Preloader";

const TestSuite: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const suiteService = useRef<SuitesService>(new SuitesService());
    const params = useParams();
    const { currentSuite,
        setCurrentSuite,
        removeCurrentSuite
    } = useSuiteStore(state => (state), shallow);

    useEffect(() => {
        setIsLoading(true);
        params.id && suiteService.current
            .get(params.id.toString())
            .then(setCurrentSuite)
            .finally(() => setIsLoading(false))
        return () => removeCurrentSuite()
    }, [params.id, setCurrentSuite, removeCurrentSuite]);

    return <TestSuiteWrapper>
        {isLoading && <Preloader />}
        {currentSuite && <div>
            <div>{currentSuite.id}</div>
            <div>{currentSuite.title}</div>
            <div>{currentSuite.description}</div>
        </div>}
    </TestSuiteWrapper>
}

export default TestSuite;
