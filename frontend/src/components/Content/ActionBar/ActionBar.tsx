import React, { useEffect, useState } from "react";
import { ActionBarWrapper } from "./ActionBar.styles";
import ActionBarItem from "./ActionBarItem/ActionBarItem";
import { ContentItemStateType } from "../../../types/types";

function ActionBar(props: any) {
    const actionBarItemValues: ContentItemStateType = [
        {
            title: 'New Requirement Specification',
            isActive: false
        },
        {
            title: 'New Use Case',
            isActive: false
        },
        {
            title: 'New Test Suite',
            isActive: false
        }
    ]

    const [values, setValues] = useState(actionBarItemValues)

    useEffect(() => {
        props.isActivated(values)
    }, [props, values])

    const onClick = (e: any) => {
        const newValues = [...values]
        newValues.forEach(value => value.title === e.target.title
            ? value.isActive = !value.isActive
            : value.isActive = false)
        setValues(newValues)
    }

    return <ActionBarWrapper >
        {values.map((value) => <ActionBarItem
            title={value.title}
            isActive={value.isActive}
            onClick={onClick}
            key={value.title} />)}
    </ActionBarWrapper>
}

export default ActionBar;
