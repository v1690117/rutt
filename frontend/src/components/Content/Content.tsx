import React, {useEffect, useRef, useState} from "react";
import {ContentWrapper} from "./Content.styles";
import ActionBar from "./ActionBar/ActionBar";
import TestSuiteCreationForm from "./TestSuites/TestSuiteCreationForm/TestSuiteCreationForm";
import {ContentItemStateType} from "../../types/types";
import SuitesService from "../../services/SuitesService";
import Suite from "../../interfaces/suite";

type ContentPropsType = {
    type: 'main' | 'requirements' | 'cases' | 'tests'
}

const Content: React.FC<ContentPropsType> = (props) => {
    const [activated, setActivated] = useState(false);
    const [suites, setSuites] = useState<Suite[]>([]);
    const suiteService = useRef<SuitesService>(new SuitesService());

    // todo move to suites component
    useEffect(() => {
        suiteService.current.getAll().then(setSuites)
    }, []);

    const isActivated = (state: ContentItemStateType) => {
        const isActivatedValue = state.some((element: { isActive: boolean }) => element.isActive === true)
        setActivated(isActivatedValue)
    }

    return <ContentWrapper>
        {props.type === 'main' &&
            <>
                <ActionBar isActivated={isActivated}/>
                {activated && <TestSuiteCreationForm/>}
            </>
        }
        {props.type === 'requirements' &&
            <div>REQUIEMENTS</div>
        }
        {props.type === 'cases' &&
            <div>USE CASES</div>
        }
        {props.type === 'tests' &&
            <div>
                {suites.map(s => <div>{s.title} {s.description}</div>)}
            </div>
        }
    </ContentWrapper>
}

export default Content;
