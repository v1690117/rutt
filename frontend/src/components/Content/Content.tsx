import React, { useEffect, useRef, useState } from "react";
import { ContentWrapper } from "./Content.styles";
import ActionBar from "./ActionBar/ActionBar";
import TestSuiteCreationForm from "./TestSuites/TestSuiteCreationForm/TestSuiteCreationForm";
import { ContentItemStateType } from "../../types/types";
import SuitesService from "../../services/SuitesService";
import Suite from "../../interfaces/suite";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import TestSuites from "./TestSuites/TestSuites";

const Content: React.FC = () => {
    const [activated, setActivated] = useState(false);
    const [suites, setSuites] = useState<Suite[]>([]);
    const suiteService = useRef<SuitesService>(new SuitesService());

    // todo move to suites component
    useEffect(() => {
        suiteService.current.getAll().then(setSuites)
    }, []);

    const tempSuitState = {
        count: 15,
        date: '11/11/2011 13:13:13'
    }

    const isActivated = (state: ContentItemStateType) => {
        const isActivatedValue = state.some((element: { isActive: boolean }) => element.isActive === true)
        setActivated(isActivatedValue)
    }

    // temp
    const handleIdClick = (e: any) => {
        console.log(e.target.textContent)
    }
    const location = useLocation()
    let params = useParams();
    useEffect(() => {
        console.log(params)
        console.log(location)
    }, [])

    return <ContentWrapper>
        <Routes>
            <Route path="/" element={<>
                <ActionBar isActivated={isActivated} />
                {activated && <TestSuiteCreationForm />}
            </>} />
            <Route path="/requirements" element={<div>REQUIEMENTS</div>} />
            <Route path="/cases" element={<div>USE CASES</div>} />
            <Route path="/tests/:id" element={<div>TEST ID</div>} />
            <Route path="/tests" element={<TestSuites />} />          
            <Route path="*" element={<div>404 NOT FOUND</div>} />
        </Routes>

    </ContentWrapper>
}

export default Content;
