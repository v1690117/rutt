import React, { useState } from "react";
import { ContentWrapper } from "./Content.styles";
import ActionBar from "./ActionBar/ActionBar";
import TestSuiteCreationForm from "./TestSuites/TestSuiteCreationForm/TestSuiteCreationForm";
import { ContentItemStateType } from "../../types/types";

type ContentPropsType = {
    type: 'main' | 'requirements' | 'cases' | 'tests'
}

const Content: React.FC<ContentPropsType> = (props) => {
    const [activated, setActivated] = useState(false)

    const isActivated = (state: ContentItemStateType) => {
        const isActivatedValue = state.some((element: { isActive: boolean }) => element.isActive === true)
        setActivated(isActivatedValue)
    }

    return <ContentWrapper>
        {props.type === 'main' &&
            <>
                <ActionBar isActivated={isActivated} />
                {activated && <TestSuiteCreationForm />}
            </>
        }
        {props.type === 'requirements' &&
            <div>REQUIEMENTS</div>
        }
        {props.type === 'cases' &&
            <div>USE CASES</div>
        }
        {props.type === 'tests' &&
            <div>TEST SUITES</div>
        }
    </ContentWrapper>
}

export default Content;
